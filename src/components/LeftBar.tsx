import ChatWidget from './ChatWidget'

const LeftBar = () => {
    return (
        <>
            <div className="w-[545px] relative overflow-y-scroll h-screen">
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