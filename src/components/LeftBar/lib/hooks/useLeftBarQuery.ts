import { useQuery } from "@tanstack/react-query"
import { getUserChats } from "../../api/leftbar"


export const useLeftBarQuery = () => {
    return useQuery({
        queryFn: () => getUserChats(),
        queryKey: ["chats"],
        enabled: false
    })
}