import { request } from "../../config/request"
import { useQuery } from "@tanstack/react-query"

export const useGetAll = () => {
    return useQuery({
        queryKey: ['all'],
        queryFn: () => request.get('/all').then(res => res.data)
    })
}
