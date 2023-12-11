import ChatWindow from '@/components/ChatWindow'
import Header from '@/components/Header'
import LeftBar from '@/components/LeftBar'
import ProfileSideBar from '@/components/ProfileSideBar'
import { useState } from 'react'
import { Outlet, Route, Routes, useLocation } from 'react-router-dom'

const Main = () => {
    const { pathname } = useLocation();
    console.log(pathname)
    const [menu, setMenu] = useState(false);
    return (
        <>
            {menu === false && <Header chngMenu={setMenu} />}

            {/* <ProfileSideBar /> */}
            <div className="flex">
                {menu && <ProfileSideBar chngMenu={setMenu} />}
                {menu === false && <LeftBar />}
                {pathname === "/main" && <div className='bg-[#282828] hidden sm:w-full sm:flex sm:items-end h-auto'>
                    <div className="bg-[#212121] border-[#1D1D1D] rounded-[50px] h-9 w-[400px] flex-center border-4 font-montserrat font-extrabold text-[#676767] m-auto">
                        Выберите отправителя
                    </div>
                </div>}
                <Outlet />
            </div >

        </>
    )
}

export default Main