import { useMutation, useQueryClient } from "@tanstack/react-query";
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
        token: string;
    };
};
export const useLogin = (onSuccess?: (data: LoginResponse["data"]) => void) => {
    const querClient = useQueryClient();
    const navigate = useNavigate();
    const mutation = useMutation({

        mutationFn: async (data: LoginInputs) => {
            try {
                const res = await axios.post<LoginResponse>(`login`, data);
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
            cookie.set("token", data.token);
            axios.defaults.headers.common.Authorization = "Bearer " + data.token;
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
                const res = await axios.post<LoginResponse>(`login`, data);
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
            cookie.set("token", data.token);
            axios.defaults.headers.common.Authorization = "Bearer " + data.token;
            querClient.refetchQueries({ queryKey: ["profile"] }).then(() => {
                navigate("/");
            });
        },
    });
    return mutation;
};