import React, { forwardRef, useState, useTransition } from 'react'
import ChangeName from './ChangeName'
import ProfileMenu from './ProfileMenu'
import CreateGroup from './CreateGroup'
import { useLocation } from 'react-router-dom'
import { useAuth } from '@/context/AuthContext'
import { motion } from 'framer-motion'
import { animated } from '@react-spring/web'


type ProfileSideBarProps = {
    chngMenu: (arg: boolean) => void
    style: any
}


const ProfileSideBar = (props: ProfileSideBarProps) => {
    const { user } = useAuth();
    const [openSettings, setOpenSettings] = useState(false);
    const [openGroup, setOpenGroup] = useState(false);
    const { pathname } = useLocation();
    return (
        <>
            <animated.div className={` ${pathname === "/main" ? "w-[545px] relative overflow-y-scroll h-auto" : "hidden sm:inline-block sm:w-[545px] h-auto duration-500 transition-all"} `} style={props.style}>

                <div className="bg-[#3E3E3E] chat-widget flex ">
                    <div className="sm:flex mx-auto sm:m-0 ">
                        <img src={user.img ? user.img : "/bilan.svg"} alt="profile" width={80} className='border-[#07F] border-2 rounded-[50px] m-auto sm:m-0 cursor-pointer' onClick={() => props.chngMenu(false)} />
                        <p className='h1-bold font-semibold text-[18px] flex-center mt-2 sm:mt-3 sm:ml-3 sm:m-0 '>@{user.username}</p>

                    </div>

                </div>
                <div className="bg-[#373737] h-screen flex flex-col justify-between pb-[100px]">
                    {openSettings && <ChangeName setGroup={setOpenGroup} setSettings={setOpenSettings} setMenu={props.chngMenu} />}
                    {openGroup === false && openSettings === false && <ProfileMenu setGroup={setOpenGroup} setSettings={setOpenSettings} />}
                    {openGroup && <CreateGroup setGroup={setOpenGroup} setSettings={setOpenSettings} />}
                    <img src="/ISAP.svg" alt="logo" className="mx-auto my-10" width={250} />
                </div>
            </animated.div>
        </>
    )
}

export default ProfileSideBar