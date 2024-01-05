import Header from '@/components/Header'
import LeftBar from '@/components/LeftBar'
import ProfileSideBar from '@/components/ProfileSideBar'
import { useEffect, useRef, useState, } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'
import { motion, useTransform } from "framer-motion"
import { animated, useTransition } from '@react-spring/web'
import "./styles.css"


const Main = () => {
    const { pathname } = useLocation();
    const [menu, setMenu] = useState<boolean>(false);
    const [searchState, setSearchState] = useState<boolean>(false)
    const [searchValue, setSearchValue] = useState<string>("")
    const transition = useTransition(menu, {
        from: { x: -50, y: 0, opacity: 0 },
        enter: { x: 0, y: 0, opacity: 1 },
        // leave: { x: -100, duration: 100 },
        config: { duration: 100 }

    })
    useEffect(() => {
        console.log("set")
    }, [menu])

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