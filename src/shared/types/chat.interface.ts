import { IBase } from "./base.interface";
import { IMessage } from "./message.interface";
import { IUser } from "./user.interface";

export interface IChat extends IBase {
    title: string,
    members: IUser[]
    messages: IMessage[]
}