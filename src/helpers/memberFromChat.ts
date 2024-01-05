import { useAuth } from "@/context/AuthContext";
import { IChat } from "@/shared/types/chat.interface";
import { IUser } from "@/shared/types/user.interface";

export const getMember = (instance: IChat) => {
    let member;
    const { user } = useAuth();
    if (instance.members.length <= 2) {
        member = instance.members[0].username === user.username ? instance.members[1] : instance.members[0];
    }
    return member

}