import { IChat } from "@/shared/types/chat.interface";



export const filterChatByLastMessage = (chats: IChat[] | undefined): IChat[] => {
    // chats?.map(chat => {
    //     console.log(chat.messages[chat.messages.length - 1])
    //     console.log(new Date(chat.messages[chat.messages.length - 1].created_at).getTime())
    // })
    chats?.sort(function (a: IChat, b: IChat) {
        if (new Date(a.messages[a.messages.length - 1].created_at) > new Date(b.messages[b.messages.length - 1].created_at)) {
            return -1
        } else {
            return 1
        }
    })
    return chats!
}