import { useQuery } from "@tanstack/react-query"
import { getUserChats } from "../../api/rightSide"


export const useRightUpSideQuery = () => {
    return useQuery({
        queryFn: () => getUserChats(),
        queryKey: ["chats"]
    })
}