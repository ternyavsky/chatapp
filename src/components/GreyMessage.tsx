import { IMessage } from "@/shared/types/message.interface"

type greyMessageProps = {
  message: IMessage
}

const GreyMessage = ({ message}: greyMessageProps) => {
  const dateCreateLastMessage = new Date(message?.created_at!)
  const hour = dateCreateLastMessage.getHours() + 3
  const minute = dateCreateLastMessage.getMinutes() < 10 ? `0${dateCreateLastMessage.getMinutes()}` : dateCreateLastMessage.getMinutes()
  return (
    <div className="items-end">
      <div className="flex rounded-3xl items-end justify-end bg-[#3E3E3E] w-fit h-fit float-right h1-bold  max-w-[300px] whitespace-normal m-3">
        <p className="text-sm font-bold mx-auto p-3">{message.text}
        </p>
        <p className=" text-xs pr-2 pb-1">{hour}:{minute}</p>
      </div>
    </div>
  )
}

export default GreyMessage