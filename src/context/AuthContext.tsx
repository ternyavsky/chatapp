
import { GetCurrentUser } from "@/api/auth";
import { getCookie } from "@/helpers/cookie";
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

const INITIAL_USER: IUser = {
    id: "",
    username: "",
    password: "",
    img: "",
    role: "",
    created_at: new Date(),
    updated_at: new Date()
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
                    id: currAcc.username,
                    username: currAcc.username,
                    password: currAcc.password,
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
        }
    }
    const navigate = useNavigate();

    useEffect(() => {
        if (getCookie('access_token') == undefined)
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