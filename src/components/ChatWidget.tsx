import React from 'react'

const ChatWidget = () => {
    return (

        <div className="bg-[#2F2F2F] flex chat-widget relative hover:bg-[#222] hover:cursor-pointer">
            <img src="/src/assets/bilan.svg" alt="profile" width={80}
            />
            <img src="/src/assets/online.svg" alt="online" className='absolute top-11 left-[3.4rem]' />
            <div className="flex-col ">
                <h1 className='h1-bold font-bold'>Святослав</h1>
                <div className="flex gap-1">
                    <img src="/src/assets/sended.svg" alt="last_message" width={7} />
                    <p className='h1-bold text-[16px]'>Я въебал биг-бона</p>
                    <p className='text-[12px] h1-bold absolute right-0 pr-2 top-[2.18rem]'>12:34</p>
                </div>

            </div>
            <img src="/src/assets/menu.svg" alt="menu" className='h-3 mt-[8px] absolute right-0 pr-2' />


        </div>

    )
}

export default ChatWidget