import { useState } from 'react'
import ChangeName from './ChangeName'
import ProfileMenu from './ProfileMenu'
import CreateGroup from './CreateGroup'

type ProfileSideBarProps = {
    chngMenu: (arg: boolean) => void
}

const ProfileSideBar = ({ chngMenu }: ProfileSideBarProps) => {
    const [openSettings, setOpenSettings] = useState(false);
    const [openGroup, setOpenGroup] = useState(false);

    return (
        <>
            <div className="bg-[#373737] h-auto w-[545px]">

                <div className="bg-[#3E3E3E] chat-widget flex ">
                    <div className="sm:flex mx-auto sm:m-0 ">
                        <img src="/bilan.svg" alt="profile" width={80} className='border-[#07F] border-2 rounded-[50px] m-auto sm:m-0 cursor-pointer' onClick={() => chngMenu(false)} />
                        <p className='h1-bold font-semibold text-[18px] flex-center mt-2 sm:mt-3 sm:ml-3 sm:m-0 '>Богданчик стелит</p>

                    </div>

                </div>
                <div className="bg-[#373737] h-screen flex flex-col justify-between pb-[100px]">
                    {openSettings && <ChangeName setGroup={setOpenGroup} setSettings={setOpenSettings} />}
                    {openGroup === false && openSettings === false && <ProfileMenu setGroup={setOpenGroup} setSettings={setOpenSettings} />}
                    {openGroup && <CreateGroup setGroup={setOpenGroup} setSettings={setOpenSettings} />}
                    <img src="/ISAP.svg" alt="logo" className=" p-4 mx-auto" width={250}  />
                </div>
            </div>
        </>
    )
}

export default ProfileSideBar