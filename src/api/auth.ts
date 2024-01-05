import { INewUser, IUser, TgUser } from "@/shared/types/user.interface";
import { instance } from "./config";
import { AxiosError, AxiosResponse } from "axios";
import { IToken } from "@/shared/types/token.interface";

export async function CreateUserAccount(
    user: INewUser
): Promise<AxiosResponse<IUser> | number | undefined> {
    try {
        const newUser = await instance.post("/api/user/", {
            username: user.username,
            password: user.password,
            role: user.role,
            img: user.img
        })
        return newUser.data
    } catch (error) {
        const err = error as AxiosError
        return err.response?.status

    }
}

export async function TelegramAuth(
    tgUser: TgUser
): Promise<AxiosResponse<IUser> | number | undefined> {
    try {
        const user = await instance.post("api/tguser", {
            username: tgUser.username,
            password: tgUser.id.toString(),
            role: "user",
            img: tgUser.photo_url,
        })
        return user
    } catch (error) {
        const err = error as AxiosError
        return err.response?.status
    }
}


export async function changeUser(username: string) {
    try {
        const token = localStorage.getItem("access_token")
        const newUser = await instance.put(`api/user/${username}/`, {}, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        return newUser.data
    } catch (error) {
        const err = error as AxiosError
        return err.response?.status
    }
}

export async function Login(
    username: string | undefined,
    password: string | undefined
): Promise<AxiosResponse<IToken> | boolean> {
    try {
        const token = await instance.post("/api/login", {
            username: username,
            password: password
        })
        const token_data = token.data
        console.log(token_data)
        localStorage.setItem("access_token", token_data["access_token"])
        return token_data
    } catch (error) {
        return false
    }


}


export async function GetCurrentUser(): Promise<IUser | null> {
    const token = localStorage.getItem("access_token")
    try {
        const user = await instance.get("/api/user", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        )
        return user.data
    } catch (error) {
        console.log(error)
        return null
    }
}



