import { useQuery, useQueryClient } from "@tanstack/react-query"
import { getUserChats } from "../../api/chatWindow"


export const useChatWindowQuery = () => {
    return useQuery({
        queryFn: () => getUserChats(),
        queryKey: ["chats"],
    })
}
