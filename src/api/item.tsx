import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";



export type ItemInput = {
  id: string;
  name: string;
  image: FileList;
  price: string;
  category: number | { id: number; name: string };
  description: string;
}
export type ItemResponse = {
  data: ItemInput[];
  success: boolean;
  message: string;
};


export const useGetItems = () => {
  const query = useQuery({
    queryKey: ['item'],
    queryFn: async () => {
      const res = await axios.get<ItemResponse>('items');
      return res.data.data;
    }
  });
  return query;
}

export const useAddItem = (onSuccess?: (data: ItemResponse) => void) => {
  const queryClient = useQueryClient();
  const mutation = useMutation<ItemResponse, AxiosError<{ server_error: string }>, ItemInput>({
    mutationFn: async (data: ItemInput) => {
      try {
        const formData = new FormData();
        formData.append("name", data.name);
        formData.append("category", `${data.category}`);
        formData.append("price", data.price);
        formData.append("description", data.description);
        formData.append("image", data.image[0]);

        const res = await axios.post<ItemResponse>("items", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        return res.data;
      }
      catch (error) {
        const err = error as AxiosError<{ server_error: string }>;
        const message = err.response?.data.server_error;
        throw new Error(message || "there was an error");
      }
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["item"] });
      if (onSuccess) onSuccess(data);
    },
  });

  return mutation;
};

export const useEditItem = (onSuccess?: (data: ItemResponse) => void,
  onError?: () => void,) => {
  const queryClient = useQueryClient();

  const mutation = useMutation<ItemResponse, AxiosError<{ server_error: string }>, ItemInput>({
    mutationFn: async (data: ItemInput) => {
      try {
        const formData = new FormData();
        formData.append("name", data.name);
        formData.append("category", `${data.category}`);
        if (data.image && data.image.length > 0) {
          formData.append("image", data.image[0]);
        }
        formData.append("price", data.price);
        formData.append("description", data.description);
        const res = await axios.put<ItemResponse>(`items/${data.id}`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        return res.data;
      }
      catch (error) {
        const err = error as AxiosError<{ server_error: string }>;
        const message = err.response?.data.server_error;
        throw new Error(message || "there was an error");
      }
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["item"] });
      if (onSuccess) onSuccess(data);
    },
    onError: () => {
      if (onError) onError();
    }
  });

  return mutation;
}

export const useDeleteItem = (onSuccess?: (data: ItemResponse) => void) => {
  const queryClient = useQueryClient();
  const mutation = useMutation<ItemResponse, AxiosError<{ server_error: string }>, string>({
    mutationFn: async (id: string) => {
      try {
        const res = await axios.delete<ItemResponse>(`items/${id}`);
        return res.data;
      }
      catch (error) {
        const err = error as AxiosError<{ server_error: string }>;
        const message = err.response?.data.server_error;
        throw new Error(message || "there was an error");
      }
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["item"] });
      if (onSuccess) onSuccess(data);
    },
  });
  return mutation;
}