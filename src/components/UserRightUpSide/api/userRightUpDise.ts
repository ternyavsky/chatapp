import { AxiosResponse } from "axios"
import { instance } from "@/api/config"
import { IChat } from "@/shared/types/chat.interface"
import { IUser } from "@/shared/types/user.interface"

export async function getUserByUsername(
    username: string
): Promise<AxiosResponse<IUser>> {
    const token = localStorage.getItem("access_token")
    return await instance.get(`api/users/${username}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}