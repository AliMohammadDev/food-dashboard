import { useQuery } from "@tanstack/react-query";
import axios from "axios";



export type Category = {
    id: string;
    name: string;
    slug: string;
    image: string;
}


export const useGetCategories = ()=>{
    const query = useQuery({
        queryKey:['category'],
        queryFn:async ()=>{
            const res = await axios.get<Category[]>('https://api.escuelajs.co/api/v1/categories');
            return res.data;
        }
    });
    return query;
}