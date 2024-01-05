import { instance } from '@/api/config';
import { IUser } from '@/shared/types/user.interface';
import { AxiosResponse } from "axios"

export async function getAllUsers(
): Promise<AxiosResponse<IUser[]>> {
    const token = localStorage.getItem("access_token")
    return await instance.get("/api/users", {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}

