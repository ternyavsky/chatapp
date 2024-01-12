import { ICreateMessage, IFirstMessage, IMessage } from "@/shared/types/message.interface"
import { IUser } from "@/shared/types/user.interface"
import { io } from "socket.io-client"

export const baseURL = "http://213.171.10.182:8000"
// export const baseURL = "http://localhost:8000"s


export const socket = io(baseURL, {
    extraHeaders: {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`
    },
}).connect()



export const sendFirstMessage = async (user: IUser, message: IFirstMessage) => {
    socket.emit("createFirstMessage", { user, message })
}

export const sendMessage = async (message: ICreateMessage) => {
    socket.emit("createMessage", message)
}
export const connectCall = async () => {
    socket.emit("connectCall")
}

export const handleTyping = async () => {
    socket.emit("typing")
}

export const disconnectCall = async () => {
    socket.emit("disconnectCall")
}

export const changeName = async (username: string) => {
    socket.emit("changeUsername")
}