
import { GetCurrentUser } from "@/api/auth";
import { connectCall } from "@/api/ws";
import { IChat } from "@/shared/types/chat.interface";
import { IMessage } from "@/shared/types/message.interface";
import { IUser } from "@/shared/types/user.interface";
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";



interface IContextType {
    user: IUser;
    isLoading: boolean;
    setUser: React.Dispatch<React.SetStateAction<IUser>>;
    isAuth: boolean;
    setIsAuth: React.Dispatch<React.SetStateAction<boolean>>;
    checkAuthUser: () => Promise<boolean>;
};



export const INITIAL_USER: IUser = {
    id: "",
    username: "",
    password: "",
    online: false,
    img: "",
    role: "",
    created_at: new Date(),
    updated_at: new Date()
}


export const INITIAL_MESSAGE: IMessage = {
    id: "",
    author: INITIAL_USER,
    text: "",
    created_at: new Date(),
    updated_at: new Date(),
}

export const INITIAL_CHAT: IChat = {
    id: "",
    messages: [INITIAL_MESSAGE],
    created_at: new Date(),
    updated_at: new Date(),
    title: "",
    members: [INITIAL_USER]
}


const INITIAL_STATE = {
    user: INITIAL_USER,
    isLoading: false,
    isAuth: false,
    setUser: () => { },
    setIsAuth: () => { },
    checkAuthUser: async () => false as boolean,
}

const AuthContext = createContext<IContextType>(INITIAL_STATE)

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<IUser>(INITIAL_USER)
    const [isLoading, setIsLoading] = useState(false);
    const [isAuth, setIsAuth] = useState(false)
    const checkAuthUser = async () => {
        try {
            const currAcc = await GetCurrentUser()
            if (currAcc) {
                setUser({
                    id: currAcc.id,
                    username: currAcc.username,
                    password: currAcc.password,
                    online: currAcc.online,
                    img: currAcc.img,
                    role: currAcc.role,
                    created_at: currAcc.created_at,
                    updated_at: currAcc.updated_at

                })
               
                setIsAuth(true)
                return true
            }
            return false
        } catch (error) {
            console.log(error)
            return false;
        }
        finally {
            setIsLoading(false)
            connectCall()
        }
    }
    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem('access_token') == undefined)
            navigate("/")

        checkAuthUser();
    }, [])
    const value = {
        user,
        setUser,
        isLoading,
        isAuth,
        setIsAuth,
        checkAuthUser
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider

export const useAuth = () => useContext(AuthContext);