import { IMessage } from "@/shared/types/message.interface"

type blueMessageProps = {
    message: IMessage
    
}

const BlueMessage = ({ message }: blueMessageProps) => {
    const dateCreateLastMessage = new Date(message?.created_at!)
    const hour = dateCreateLastMessage.getHours()
    const minute = dateCreateLastMessage.getMinutes() < 10 ? `0${dateCreateLastMessage.getMinutes()}` : dateCreateLastMessage.getMinutes()
    return (
        <div className="items-start">
            <div className="flex bg-[#4285F4] rounded-3xl float-left justify-start w-fit max-w-[300px] h1-bold m-3 items-end whitespace-normal">
                <p className="text-sm font-bold p-3">{message.text}</p>
                <p className="text-xs pr-2 pb-1">{hour}:{minute}</p>

            </div>
        </div>
    )
}

export default BlueMessage