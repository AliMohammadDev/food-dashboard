import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import Cookie from "cookie-universal";

export type OrderResponse = {
  message: string;
  data: {
    id: number;
    status: string;
    cart: {
      id: number;
      status: string;
    };
    delivery: {
      id: number;
      firstName: string;
      lastName: string;
      emailD: string;
      street: string;
      city: string;
      state: string;
      country: string;
      phone: string;
      zipCode: string;
    };
    createdAt: string;
  }[];
  length: number;
  result: {
    name: string;
    quantity: number;
  }[];
  sumPrice: number;
};

export type OrderInput = {
  id: string;
  status: string;
}

export function useGetAllOrder() {
  const query = useQuery({
    queryKey: ["orders"],
    retry: 1,
    queryFn: async () => {
      const token = Cookie().get("token");
      if (!token) return null;
      try {
        const res = await axios.get<OrderResponse>("/orders", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        return res.data;
      } catch {
        throw new Error("there was an error");
      }
    },
  });

  return query;
}



export const useEditOrder = (onSuccess?: () => void) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: OrderInput) => {
      try {
        const res = await axios.put<OrderResponse>(`/orders/${data.id}`, { status: data.status });
        return res.data;
      } catch (error) {
        const err = error as AxiosError<{ server_error: string }>;
        const message = err.response?.data.server_error;
        throw new Error(message || "there was an error");
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["orders"] });
      if (onSuccess) onSuccess();
    },
  });
};
