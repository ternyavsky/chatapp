import Header from '@/components/Header'
import LeftBar from '@/components/LeftBar'
import ProfileSideBar from '@/components/ProfileSideBar'
import { useEffect, useState } from 'react'
import { Outlet, useBeforeUnload, useLocation } from 'react-router-dom'
import {  useTransition } from '@react-spring/web'
import "./styles.css"
import { useGetChatsQuery } from '@/components/UserWindow/lib/hooks/useGetChats'
import { useChats } from '@/store/useChat'
import { useQuery } from '@tanstack/react-query'
import { getUserChats } from '@/api/chat'
import { useUsers } from '@/store/useUsers'
import { getAllUsers } from '@/components/LeftBar/api/leftbar'
import { filterChatByLastMessage } from '@/helpers/filterChatByLastMessage'
import { connectCall, disconnectCall, socket } from '@/api/ws'
import { useAuth } from '@/context/AuthContext'


const Main = () => {
    const { pathname } = useLocation();
    const { user, isAuth } = useAuth();
    const [menu, setMenu] = useState<boolean>(false);
    const [searchValue, setSearchValue] = useState<string>("")
    const { data, isSuccess } = useQuery({ queryKey: ["chats"], queryFn: () => getUserChats() });
    const {data: usersData, isSuccess: userSuccess} = useQuery({queryKey: ["users"], queryFn:() => getAllUsers()})
    const { chats, setChats, fetchChats } = useChats();
    const { users, setUsers, fetchUsers } = useUsers();
    const transition = useTransition(menu, {
        from: { x: -50, y: 0, opacity: 0 },
        enter: { x: 0, y: 0, opacity: 1 },
        // leave: { x: -100, duration: 100 },
        config: { duration: 100 }

    })
    useEffect(() => {
        socket.on("connectCall", (e) => {
            console.log('connectCall')
            fetchChats();
            fetchUsers();
        })
        socket.on("disconnectCall", (e) => {
            console.log('disconnectCall')
            fetchChats();
            fetchUsers();
        })
        socket.on("createFirstMessage", () => {
            fetchChats();
            fetchUsers();
        })
          fetchChats()
          setUsers(usersData?.data)
        }, [isSuccess, userSuccess])
    
    useBeforeUnload(() => {
        user.online = false
        disconnectCall()
          })

    return (
        <>
            <div className="">
                {menu === false &&
                    <Header chngMenu={setMenu} key={document.location.href} setSearchValue={setSearchValue}/>}
                <div className="flex" >
                    {menu === false &&

                        <LeftBar searchValue={searchValue} setSearchValue={setSearchValue}/>}
                    {
                        transition((style, item) =>
                            item ?
                                <ProfileSideBar chngMenu={setMenu} style={style} /> : ""
                        )}
                    {pathname === "/main" && <div className='bg-[#282828] hidden sm:w-full sm:flex sm:items-end h-auto'>
                        <div className="bg-[#212121] border-[#1D1D1D] rounded-[50px] h-9 w-[400px] flex-center border-4 font-montserrat font-extrabold text-[#676767] m-auto">
                            Выберите отправителя
                        </div>
                    </div>}
                    <Outlet />
                </div >
            </div >
        </>
    )
}

export default Main