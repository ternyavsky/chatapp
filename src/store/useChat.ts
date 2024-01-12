import { getUserChats } from "@/api/chat";
import { filterChatByLastMessage } from "@/helpers/filterChatByLastMessage";
import { IChat } from "@/shared/types/chat.interface"
import { create } from "zustand"

interface IChatStore{
    chats: IChat[] | undefined;
    setChats: (chats: IChat[] | undefined) => void;
    fetchChats: () => void
}

export const useChats = create<IChatStore>((set) => ({
    chats: undefined,
    setChats: (chats: IChat[] | undefined) => set(() => ({ chats: chats })),
    fetchChats: async () => {
        const res = await getUserChats();
        set({chats: filterChatByLastMessage(res.data)})
    }
}))