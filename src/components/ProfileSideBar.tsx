import React from 'react'
import { Input } from './ui/input'
import RightUpSide from './RightUpSide'
import { Button } from './ui/button'
import ChangeName from './ChangeName'
import ProfileMenu from './ProfileMenu'
import CreateGroup from './CreateGroup'

const ProfileSideBar = () => {
    return (
        <>
            <div className="bg-[#373737] h-auto w-[545px]">

                <div className="bg-[#3E3E3E] chat-widget flex ">
                    <div className="sm:flex mx-auto sm:m-0 ">
                        <img src="/src/assets/bilan.svg" alt="profile" width={80} className='border-[#07F] border-2 rounded-[50px] m-auto sm:m-0' />
                        <p className='h1-bold font-semibold text-[18px] flex-center mt-2 sm:mt-3 sm:ml-3 sm:m-0 '>Богданчик стелит</p>

                    </div>

                </div>
                <div className="bg-[#373737] h-screen flex flex-col mx-auto">
                    {/* <ChangeName/> */}
                    {/* <ProfileMenu /> */}
                    <CreateGroup />
                    <img src="/src/assets/ISAP.svg" alt="" className="absolute bottom-0 left-0 right-0 p-4" />
                </div>
            </div>
        </>
    )
}

export default ProfileSideBar