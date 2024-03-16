import { useQuery } from "@tanstack/react-query";
import { request } from "../../config/request";


export const useGetAll = () => {
    return useQuery({
        queryKey: ['all'],
        queryFn: () => request.get('/all').then(res => res.data)
    })
}