import { IBase } from "./base.interface";

export interface IUser extends IBase {
    username: string,
    password: string,
    img: string | null,
    role: string,
}

export interface INewUser {
    username: string,
    password: string,
    img: string | null,
    role: string,
}

export interface TgUser {
    auth_date: number;
    first_name: string;
    last_name?: string;
    hash: string;
    id: number;
    photo_url?: string;
    username?: string;
}