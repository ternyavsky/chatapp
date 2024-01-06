import {  INITIAL_USER, useAuth } from "@/context/AuthContext";
import { FC, useEffect, useState } from "react";
import { useBeforeUnload, useLocation, useNavigate } from "react-router-dom"
import { useRightUpSideQuery } from "../lib/hooks/useRightUpSideQuery";
import { socket } from "@/api/ws";
import { IUser } from "@/shared/types/user.interface";

const RightUpSide: FC = () => {
    const { pathname } = useLocation();
    const { user } = useAuth();
    const { data, refetch } = useRightUpSideQuery();
    const [typingState, setTypingState] = useState<boolean>(false);
    const [member, setMember] = useState<IUser>(INITIAL_USER)
    useBeforeUnload(() => setTypingState(false))
    useEffect(() => {
        data?.data?.map(e => {
            pathname === `/main/${e.id}` ? e.members.length <= 2 && e.members[0].username === user.username ? setMember(e.members[1]) : setMember(e.members[0]) : console.log(e);
        })
        socket.on("connectCall", () => {
            refetch()
        })
        socket.on("disconnectCall", () => {
            user.username === member?.username && setTypingState(() => false)
            refetch()
        })
        socket.on("createMessage", () => setTypingState(false))
        socket.on("typing", (user: IUser) => {
            console.log('typing', user.username)
            console.log("member", member.username)
            user.username === member?.username && setTypingState(() => true); console.log("changed")
        })

    }, [data, socket, member, pathname])

    const navigate = useNavigate();

    return (
        <>

            <div className={` bg-[#302F2F] ${pathname !== "/main" ? "flex w-screen" : "sm:w-screen"} `}>
                {pathname !== "/main" &&
                    <>
                        <img src="/arrowl.svg" alt="" width={50} className="p-2 sm:hidden" onClick={() => navigate("/main")} />
                        <img src={member?.img ? member.img : "/bilan.svg"} alt="" className='rounded-[50px] m-2 cursor-pointer' width={80} />
                        <div className="flex-col my-auto ml-2  ">
                            <h1 className='h1-bold font-bold'>{member?.username}</h1>
                            <div className="flex gap-1">

                                {member?.online &&
                                    <img src="/online.svg" alt="last_message" width={7} />}
                                {
                                    member?.online && typingState === false && <p className='h1-bold text-[16px] font-medium'>в сети</p>
                                }
                                {
                                    member.online && typingState && <p className='h1-bold text-[16px] font-medium'>печатает...</p>
                                }
                            </div>

                        </div>
                        <img src="/right-menu.svg" alt="" className="absolute right-0 p-4 cursor-pointer" />
                    </>

                }
            </div>

        </>
    )
}

export default RightUpSide