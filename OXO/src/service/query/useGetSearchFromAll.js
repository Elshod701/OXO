import { request } from "../../config/request"
import { useQuery } from "@tanstack/react-query"


export const useGetSearchFromAll = (search = "") => {
    return useQuery({
        queryKey: [],
        queryFn: () => request.get("/all", { params: search ? { title_like: search } : undefined }).then(res => res.data)
    })
}
