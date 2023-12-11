import { useState } from "react"
import { Input } from "./ui/input"
import BlueMessage from "./BlueMessage";
import GreyMessage from "./GreyMessage";

const ChatWindow = () => {
    const [value, setValue] = useState("");
    return (
        <div className='bg-[#282828] hidden sm:w-full sm:flex sm:items-end h-auto'>



            <div className="overflow-y-scroll relative p-3 h-screen w-full pb-[200px] flex flex-col">

                <BlueMessage />
                <GreyMessage />
                <BlueMessage />
                <BlueMessage />
                <GreyMessage />
                <GreyMessage />
                <GreyMessage />
                <BlueMessage />
                <BlueMessage />
                <GreyMessage />
                <BlueMessage />
                <BlueMessage />
                <GreyMessage />
                <BlueMessage />
                <BlueMessage />
                <GreyMessage />
                <BlueMessage />
                <BlueMessage />
                <BlueMessage />



            </div>





            <div className="bg-[#333] px-10 py-2 flex gap-2 fixed bottom-0 w-full ">
                <Input type='search' className='rounded-[50px] bg-[#282828] focus-visible:text-white p-4 ml-5 sm:w-2/5 lg:w-3/5' placeholder='Введите сообщение...' value={value} onChange={(e) => setValue(e.target.value)} />
                <img src="/send.svg" className={`${!value && 'opacity-40'}`} alt="" width={45} />

            </div>

        </div>
    )
}

export default ChatWindow