import { useInfiniteQuery } from "@tanstack/react-query"
import { request } from "../../config/request"


export const useInfiniteData = () => {
    return useInfiniteQuery({
        queryKey: ["allData"],
        initialPageParam: 1,
        queryFn: ({ pageParam }) => {
            return request.get("/all", { params: { _page: pageParam, _limit: 10 } }).then((res) => res.data);
        },
        getNextPageParam: (lastPage, allPage, lastPageParam) => {
            return lastPageParam < 10 ? allPage.length + 1 : undefined
        }
    })
}
