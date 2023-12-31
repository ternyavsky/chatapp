import { FC, useEffect, useState } from "react"
import { Input } from "@/components/ui/input";
import send from "./assets/send.svg"
import { useLocation, useNavigate } from "react-router-dom";
import { IChat } from "@/shared/types/chat.interface";
import { handleTyping, sendFirstMessage, socket } from "@/api/ws";
import { useUserWindowQuery } from "../lib/hooks/useUserWindow";
import { IUser } from "@/shared/types/user.interface";
import { useGetChatsQuery } from "../lib/hooks/useGetChats";
const UserWindow: FC = () => {
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const { refetch: leftbar } = useGetChatsQuery();
    const memberUsername = pathname.slice(8)
    const { data } = useUserWindowQuery(memberUsername)
    const [value, setValue] = useState<string>("");
    const [member, setMember] = useState<IUser | null>()

    useEffect(() => {
        socket.on("createFirstMessage", (chat: IChat) => {
            leftbar()
            navigate(`/main/${chat.id}`)
        })
        leftbar()
        data && setMember(data.data)
    }, [data, socket])
    return (
        <div className='bg-[#282828] w-full flex items-end h-fit'>
            <div className='bg-[#282828] hidden sm:w-full sm:flex sm:items-end h-screen'>
                <div className="bg-[#212121] border-[#1D1D1D] rounded-[50px] h-9 w-[400px] flex-center border-4 font-montserrat font-extrabold text-[#676767] m-auto">
                    Начинай oбщаться!
                </div>
            </div>
            <div className="bg-[#333] sm:px-10 py-2 flex gap-2 fixed bottom-0 w-full ">

                <Input
                    type='search'
                    className='rounded-[50px] bg-[#282828] focus-visible:text-white p-4 ml-5 sm:w-2/5 lg:w-3/5 w-4/6'
                    placeholder='Введите сообщение...'
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    onKeyDown={handleTyping}
                />
                <img
                    src={send}
                    className={`${!value ? 'hidden' : "cursor-pointer hover:opacity-50"} `}
                    alt="send"
                    width={45}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            sendFirstMessage(member!, { author: member!, text: value })
                            setValue("")
                        }
                    }}
                    onClick={() => {
                        sendFirstMessage(member!, { author: member!, text: value })
                        setValue("")
                    }}
                />
            </div>
        </div>
    )
}
export default UserWindow 