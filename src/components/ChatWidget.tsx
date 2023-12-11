import { Link } from "react-router-dom"
import bilan from "../../public/bilan.svg"
import online from "../../public/online.svg"
import sended from "../../public/sended.svg"
import menu from "../../public/menu.svg"
const ChatWidget = () => {
    return (
        <>
            <Link to={"/main/1"}>
                <div className="bg-[#2F2F2F] flex chat-widget relative hover:bg-[#222] hover:cursor-pointer" >
                    <img src={bilan} alt="profile" width={80}
                    />
                    <img src={online} alt="online" className='absolute top-11 left-[3.4rem] ' width={18} />
                    <div className="flex-col ">
                        <h1 className='h1-bold font-bold'>Святослав</h1>
                        <div className="flex gap-1">
                            <img src={sended} alt="last_message" width={7} />
                            <p className='h1-bold text-[16px]'>Я въебал биг-бона</p>
                            <p className='text-[12px] h1-bold absolute right-0 pr-2 top-[2.18rem]'>12:34</p>
                        </div>

                    </div>
                    <img src={menu} alt="menu" className='h-3 mt-[8px] absolute right-0 pr-2' />


                </div>
            </Link>
        </>

    )
}

export default ChatWidget