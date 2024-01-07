import { FC, useEffect, useState } from "react"
import { Input } from "@/components/ui/input";
import send from "./assets/send.svg"
import BlueMessage from "@/components/BlueMessage";
import GreyMessage from "@/components/GreyMessage";
import { useLocation } from "react-router-dom";
import { INITIAL_CHAT, useAuth } from "@/context/AuthContext";
import { IChat } from "@/shared/types/chat.interface";
import { handleTyping, sendMessage, socket } from "@/api/ws";
import { IMessage } from "@/shared/types/message.interface";
import { useChatWindowQuery } from "../lib/hooks/useChatWindowQuery";

const ChatWindow: FC = () => {
    const { user } = useAuth();
    const { pathname } = useLocation();
    const { data, refetch } = useChatWindowQuery();
    const [value, setValue] = useState<string>("");
    const [chat, setChat] = useState<IChat>(INITIAL_CHAT)
    const [messages, setMessages] = useState<IMessage[] | null>([]);


    useEffect(() => {
        socket.on("createMessage", () => {
            refetch()
        })
        socket.on("connectCall", () => {
            refetch()
        })
        socket.on("disconnectCall", () => {
            refetch()
        })
        data?.data?.map(e => {
            pathname === `/main/${e.id}` && setMessages(e.messages)
        })
        data?.data?.map(e => {
            pathname === `/main/${e.id}` && setChat(e)
        })
    }, [data, socket, pathname])

    const enterKey = (e) => {
        if (e.key === "Enter") {
            sendMessage({ author: user, chat: chat, text: value })
            setValue("")
        }
    }

    return (
        <div className='bg-[#282828] w-full flex items-end h-fit'>
            <div className="overflow-y-scroll relative p-3 h-screen w-full pb-[200px] flex flex-col" >
                {
                    messages?.map(message => message.author.username === user.username
                        ? <GreyMessage message={message} key={message.id} />
                        : <BlueMessage message={message} key={message.id} />)
                }

            </div>
            <div className="bg-[#333] sm:px-10 py-2 flex gap-2 fixed bottom-0 w-full ">
                <Input
                    type='search'
                    className='rounded-[50px] bg-[#282828] focus-visible:text-white p-4 ml-5 sm:w-2/5 lg:w-3/5 w-4/6'
                    placeholder='Введите сообщение...'
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    onKeyDown={(e) => {
                        handleTyping()
                        enterKey(e)
                    }}
                />
                <img
                    src={send}
                    className={`${!value ? 'hidden' : "cursor-pointer hover:opacity-50"} `}
                    alt="send"
                    width={45}
                    onClick={() => {
                        sendMessage({ author: user, chat: chat, text: value })
                        setValue("")
                    }}
                />
            </div>
        </div>
    )
}
export default ChatWindow