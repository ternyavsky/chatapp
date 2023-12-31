import { AxiosError, AxiosResponse } from "axios"
import { instance } from "./config"
import { IChat } from "@/shared/types/chat.interface"
import { useQuery, useQueryClient } from "@tanstack/react-query"

export async function getUserChats(
): Promise<AxiosResponse<IChat[]>> {

    const token = localStorage.getItem("access_token")
    const chats: AxiosResponse = await instance.get("/api/chats", {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    return chats

}


export const useChatWindowQuery = () => {
    return useQuery({
        queryFn: () => getUserChats(),
        queryKey: ["chats"],
    })
}
