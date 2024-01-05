import { IChat } from "@/shared/types/chat.interface";
import { IMessage } from "@/shared/types/message.interface";

export const getLastMessage = (chat: IChat): IMessage | undefined => {
    console.log(chat.messages)
    let start = new Date().getTime()
    let end = new Date(23, 59, 59, 999).getTime()
    chat.messages.filter(message => {
        let date = new Date(message.created_at).getTime()
        return date >= start && date <= end
    })
    console.log(chat.messages[chat.messages.length - 1])
    return chat.messages[chat.messages.length - 1]
}