import { useLocation } from 'react-router-dom'
import ChatWidget from '@/components/ChatWidget';
import { useEffect, useState } from 'react';
import { IChat } from '@/shared/types/chat.interface';
import { useLeftBarQuery } from '../lib/hooks/useLeftBarQuery';
import { filterChatByLastMessage } from '@/helpers/filterChatByLastMessage';
import { useGetUsersQuery } from '../lib/hooks/useGetUsers';
import { IUser } from '@/shared/types/user.interface';
import UserWidget from '@/components/UserWidget';
import { INITIAL_USER, useAuth } from '@/context/AuthContext';
import { socket } from '@/api/ws';
import { useChats } from '@/store/useChat';
import { useUsers } from '@/store/useUsers';

type leftbarProps = {
    searchValue: string
    setSearchValue: (arg: string) => void
}

const LeftBar = ({ searchValue, setSearchValue }: leftbarProps) => {
    const { pathname } = useLocation();
    const { user: aUser } = useAuth();
    const { chats, fetchChats } = useChats();
    const { users } = useUsers();
    const [searchState, setSearchState] = useState<boolean>(true)
    // const [users, setUsers] = useState<IUser[] | undefined>([INITIAL_USER])
   
    let chatMembers: string[] = [""]
    useEffect(() => {
        console.log(chats)
        // usersData && setUsers(usersData?.data)
        searchValue.length > 0 ? setSearchState(false) : setSearchState(true)

    }, [searchValue])
    chats?.map(chat => chat.members.map(user => chatMembers.push(user.username)))
    return (
        <>
            <div className={` ${pathname === "/main" ? "w-[545px] relative overflow-y-scroll h-screen" : "hidden sm:inline-block sm:w-[545px] sm:h-screen sm:overflow-y-scroll"} `}>
                <div className="bg-[#3E3E3E]">

                    {searchState ? chats?.map(e => (
                        <div className="" key={e.id} onClick={() => userref()}>
                            <ChatWidget chat={e} />
                        </div>
                    ))
                        :
                        <div className="">
                            {
                                users?.filter(user => user.username.toLowerCase().includes(searchValue.toLowerCase()) && chatMembers?.includes(user.username) === false && user.username !== aUser.username).map(e => (
                                    <div className="" onClick={() => setSearchValue("")}>
                                        <UserWidget user={e} />
                                    </div>))
                            }
                            {chats?.map(e => (
                                <div className="" key={e.id} onClick={() => userref()}>
                                    <ChatWidget chat={e} />
                                </div>))}
                        </div>


                    }
                </div>
            </div>

        </>
    )
}

export default LeftBar