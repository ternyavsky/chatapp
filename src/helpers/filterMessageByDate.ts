import { IMessage } from './../shared/types/message.interface';
export const filterMessageByDate = (messages: IMessage[] | null) => {
    let start = new Date().getTime()
    let end = new Date(23, 59, 59).getTime()
    messages?.filter(message => {
        let date = new Date(message.created_at).getTime()
        return date <= start && date >= end;
    })
    return messages
}

