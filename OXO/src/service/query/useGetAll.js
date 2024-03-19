import { request } from "../../config/request"
import { useQuery } from "@tanstack/react-query"
import { loadState } from "../../lib/local"
export const useGetAll = () => {
    const token = loadState("user")
    return useQuery({
        queryKey: ['all'],
        queryFn: () => request.get('/all').then(res => res.data)
    })
}
