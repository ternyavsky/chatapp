import { INITIAL_MESSAGE, useAuth } from "@/context/AuthContext"
import { getLastMessage } from "@/helpers/lastMessageInChat";
import { getMember } from "@/helpers/memberFromChat";
import { IChat } from "@/shared/types/chat.interface"
import { IMessage } from "@/shared/types/message.interface";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import bilan from "./assets/bilan.svg"
import menu from "./assets/menu.svg"

type widgetProps = {
    chat: IChat
}

const   ChatWidget = (props: widgetProps) => {
    const { user } = useAuth();
    const [lastMessage, setLastMessage] = useState<IMessage | undefined>(INITIAL_MESSAGE)
    const member = getMember(props.chat);
    const dateCreateLastMessage = new Date(lastMessage?.created_at!)
    const hour = dateCreateLastMessage.getHours()
    const minute = dateCreateLastMessage.getMinutes() < 10 ? `0${dateCreateLastMessage.getMinutes()}` : dateCreateLastMessage.getMinutes()
    useEffect(() => {
        setLastMessage(getLastMessage(props.chat))
    }, [props.chat])

    return (
        <>
            <Link to={`/main/${props.chat.id}`}>
                <div className="bg-[#2F2F2F] flex chat-widget relative hover:bg-[#222] hover:cursor-pointer h-[100px]" >
                    <img
                        src={member?.img ? member?.img : bilan} alt="profile" width={80} className="rounded-full"
                    />
                    {
                        member?.online && <img src="/online.svg" alt="online" className='absolute top-16 left-[4.2rem] ' width={18} />
                    }

                    <div className="flex-col ">
                        <h1 className='h1-bold font-bold text-sm'>{
                            member?.username}</h1>
                        <div className="flex gap-1 pt-1">
                            {lastMessage?.author.username === user.username && <img src ="/sended.svg" alt="last_message" width={7} />}

                            <p className='h1-bold text-[16px] '>{lastMessage!.text.length > 15 ? `${lastMessage?.text.slice(0, 16)}...` : lastMessage?.text}</p>
                            <p className='text-[12px] h1-bold absolute right-0 pr-2 top-[47px]'>{hour}:{minute}</p>
                        </div>

                    </div>
                    <img src={menu} alt="import React from 'react' menu" className='h-3 mt-[8px] absolute right-0 pr-2' />



                </div>
            </Link>
        </>

    )
}

export default ChatWidget