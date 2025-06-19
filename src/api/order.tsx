import { useQuery } from "@tanstack/react-query";
import axios from "axios";
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
