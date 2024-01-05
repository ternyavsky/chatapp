import { AxiosResponse } from "axios"
import { instance } from '@/api/config';
import { IUser } from '@/shared/types/user.interface';
import { IChat } from "@/shared/types/chat.interface"

export async function getUserChats(
): Promise<AxiosResponse<IChat[]>> {
    const token = localStorage.getItem("access_token")
    return await instance.get("/api/chats", {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}

export async function getAllUsers(
    ): Promise<AxiosResponse<IUser[]>> {
        console.log('call users')
        const token = localStorage.getItem("access_token")
        return await instance.get("/api/users", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
    }
    
