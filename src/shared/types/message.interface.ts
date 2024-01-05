import { IBase } from "./base.interface";
import { IChat } from "./chat.interface";
import { IUser } from "./user.interface";

export interface IMessage extends IBase {
    author: IUser
    text: string
}

export interface ICreateMessage {
    author: IUser,
    chat: IChat,
    text: string
}

export interface IFirstMessage{
    author: IUser,
    text: string
}