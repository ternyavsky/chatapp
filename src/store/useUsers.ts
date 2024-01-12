import { getAllUsers } from "@/components/Header/api/header";
import { IUser } from "@/shared/types/user.interface";
import { create } from "zustand"

interface IUserStore{
    users: IUser[] | undefined;
    setUsers: (users: IUser[] | undefined) => void;
    fetchUsers: () => void
}

export const useUsers = create<IUserStore>((set) => ({
    users: undefined,
    setUsers: (users: IUser[] | undefined) => set(() => ({ users: users })),
    fetchUsers: async () => {
        const res = await getAllUsers()
        set({users: res.data})

    }
}))