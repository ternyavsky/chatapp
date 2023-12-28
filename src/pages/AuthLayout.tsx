import { useAuth } from '@/context/AuthContext'
import { Navigate, Outlet } from 'react-router-dom'

const AuthLayout = () => {
    const { isAuth } = useAuth()
    return (
        <>
            {
                isAuth ? (
                    <Navigate to={"/main"} />
                ) :
                    <Outlet />

            }
        </>
    )
}

export default AuthLayout