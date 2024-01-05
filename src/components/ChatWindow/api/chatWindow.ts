import { instance } from '@/api/config';
import { IChat } from '@/shared/types/chat.interface';
import { AxiosResponse } from "axios"

export async function getUserChats(
): Promise<AxiosResponse<IChat[]>> {
    const token = localStorage.getItem("access_token")
    return await instance.get("/api/chats", {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}