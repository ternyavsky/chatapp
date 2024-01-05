import { useLocation } from 'react-router-dom'
import ChatWidget from '@/components/ChatWidget';
import { FC, useEffect, useState } from 'react';
import { IChat } from '@/shared/types/chat.interface';
import { useLeftBarQuery } from '../lib/hooks/useLeftBarQuery';
import { filterChatByLastMessage } from '@/helpers/filterChatByLastMessage';
import { useGetUsersQuery } from '../lib/hooks/useGetUsers';
import { IUser } from '@/shared/types/user.interface';
import UserWidget from '@/components/UserWidget';
import { useGetUsers } from '@/components/Header/lib/hooks/useGetUsers';
import { INITIAL_USER } from '@/context/AuthContext';

type leftbarProps = {
    searchValue: string
    setSearchValue: (arg: string) => void
}

const LeftBar = ({ searchValue, setSearchValue }: leftbarProps) => {
    const { pathname } = useLocation();
    const { data: chatsData, refetch } = useLeftBarQuery();
    const { data: usersData, refetch: userref } = useGetUsersQuery();
    const [chats, setChats] = useState<IChat[] | null>()
    const [searchState, setSearchState] = useState<boolean>(true)
    const [users, setUsers] = useState<IUser[] | undefined>([INITIAL_USER])
    useEffect(() => {
        console.log(users)
        chatsData && setChats(filterChatByLastMessage(chatsData?.data))
        usersData && setUsers(usersData?.data)
        searchValue.length > 0 ? setSearchState(false) : setSearchState(true) 
    }, [chatsData, usersData, searchValue])
    return (
        <>
            <div className={` ${pathname === "/main" ? "w-[545px] relative overflow-y-scroll h-screen" : "hidden sm:inline-block sm:w-[545px] sm:h-screen sm: overflow-y-scroll"} `}>
                <div className="bg-[#3E3E3E]">

                    {searchState ? chats?.map(e => (
                        <div className="" key={e.id} onClick={() => userref()}>
                            <ChatWidget chat={e} />
                        </div>
                    ))
                        : users?.filter(user => user.username.includes(searchValue)).map(e => (
                            <div className="" onClick={() => setSearchValue("")}>
                                <UserWidget user={e} />
                            </div>))
                    }


                </div>
            </div>

        </>
    )
}

export default LeftBar