import { useQuery } from "@tanstack/react-query"
import { getUserChats } from "../../api/userWindow"


export const useGetChatsQuery = () => {
    return useQuery({
        queryFn: () => getUserChats(),
        queryKey: ["chats"],
        enabled: false
    })
}