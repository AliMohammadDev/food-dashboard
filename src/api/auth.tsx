import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import Cookie from "cookie-universal";

// login
export type LoginInputs = {
  email: string;
  password: string;
};
export type RegisterInputs = {
  name: string;
  email: string;
  password: string;
};
export type LoginResponse = {
  message: "success" | "error";
  data: {
    access_token: string;
  };
};

// get profile
export type Profile = {
  id: string;
  name: string;
  email: string;
  role: string;
};



export const useGetProfile = () => {
  const query = useQuery({
    queryKey: ["profile"],
    retry: 1,
    queryFn: async () => {
      const token = Cookie().get("token");
      if (!token) return null;
      try {
        const res = await axios.get<{
          message: string; data: {
            userId: number;
            email: string;
            role: string;
            name?: string;
          };
        }>("auth/profile");
        const raw = res.data.data;
        const profile: Profile = {
          id: String(raw.userId),
          name: raw.name ?? "No Name",
          email: raw.email,
          role: raw.role,
        };
        return profile;
      } catch (err) {
        Cookie().remove("token");
        throw err;
      }
    },
  });

  return query;
};


export const useLogin = (onSuccess?: (data: LoginResponse["data"]) => void) => {
  const querClient = useQueryClient();
  const navigate = useNavigate();
  const mutation = useMutation({

    mutationFn: async (data: LoginInputs) => {
      try {
        const res = await axios.post<LoginResponse>(`auth/login`, data);
        return res.data.data;
      } catch (error) {
        const err = error as AxiosError<{ server_error: string }>;
        const message = err.response?.data.server_error;
        throw new Error(message || "there was an error");
      }
    },
    onSuccess: (data) => {
      onSuccess?.(data);
      const cookie = Cookie();
      cookie.set("token", data.access_token);

      axios.defaults.headers.common.Authorization = "Bearer " + data.access_token;
      querClient.refetchQueries({ queryKey: ["profile"] }).then(() => {
        navigate("/");
      });
    },
  });
  return mutation;
};



export const useRegister = (onSuccess?: (data: LoginResponse["data"]) => void) => {
  const querClient = useQueryClient();
  const navigate = useNavigate();
  const mutation = useMutation({

    mutationFn: async (data: LoginInputs) => {
      try {
        const res = await axios.post<LoginResponse>(`auth/register`, data);
        return res.data.data;
      } catch (error) {
        const err = error as AxiosError<{ server_error: string }>;
        const message = err.response?.data.server_error;
        throw new Error(message || "there was an error");
      }
    },
    onSuccess: (data) => {
      onSuccess?.(data);
      const cookie = Cookie();
      cookie.set("token", data.access_token);
      axios.defaults.headers.common.Authorization = "Bearer " + data.access_token;
      querClient.refetchQueries({ queryKey: ["profile"] }).then(() => {
        navigate("/login");
      });
    },
  });
  return mutation;
};