import { useLocation } from 'react-router-dom'
import ChatWidget from './ChatWidget'

const LeftBar = () => {
    const { pathname } = useLocation();
    return (
        <>
            <div className={` ${pathname === "/main" ? "w-[545px] relative overflow-y-scroll h-screen" : "hidden sm:inline-block sm:w-[545px]"} `}>
                <div className="bg-[#3E3E3E]">
                    <ChatWidget />
                    <ChatWidget />
                    <ChatWidget />
                    <ChatWidget />
                    <ChatWidget />
                    <ChatWidget />
                    <ChatWidget />
                    <ChatWidget />
                    <ChatWidget />
                    <ChatWidget />
                    <ChatWidget />
                    <ChatWidget />
                </div>
            </div>

        </>
    )
}

export default LeftBar