import { INITIAL_MESSAGE, useAuth } from "@/context/AuthContext"
import { getLastMessage } from "@/helpers/lastMessageInChat";
import { getMember } from "@/helpers/memberFromChat";
import { IChat } from "@/shared/types/chat.interface"
import { IMessage } from "@/shared/types/message.interface";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import bilan from "./assets/bilan.svg"
import menu from "./assets/menu.svg"
import { IUser } from "@/shared/types/user.interface";

type widgetProps = {
    user: IUser
}

export const UserWidget = (props: widgetProps) => {
    const { user } = useAuth();
    const member = props.user
    useEffect(() => {
        console.log("call user widget")
    }, [])

    return (
        <>
            <Link to={`/main/n/${member.username}`}>
                <div className="bg-[#2F2F2F] flex chat-widget relative hover:bg-[#222] hover:cursor-pointer h-[100px]" >
                    <img
                        src={member?.img ? member?.img : bilan} alt="profile" width={80} className="rounded-full"
                    />
                    {
                        member?.online && <img src="/online.svg" alt="online" className='absolute top-11 left-[3.4rem] ' width={18} />
                    }

                    <div className="flex-col ">
                        <h1 className='h1-bold font-bold text-sm'>{
                            member?.username}</h1>

                    </div>
                    <img src={menu} alt="import React from 'react' menu" className='h-3 mt-[8px] absolute right-0 pr-2' />



                </div>
            </Link>
        </>

    )
}
