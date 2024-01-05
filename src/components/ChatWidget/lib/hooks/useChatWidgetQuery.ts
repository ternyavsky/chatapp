import { useQuery } from "@tanstack/react-query"
import { getUserChats } from "../../api/chatWidget"


export const useChatWidgetQuery = () => {
    return useQuery({
        queryFn: () => getUserChats(),
        queryKey: ["chats"]
    })
}