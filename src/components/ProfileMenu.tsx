import { useAuth } from "@/context/AuthContext";
import { useNavigate } from "react-router-dom"

type ProfileMenuProps = {
  setGroup: (arg: boolean) => void,
  setSettings: (arg: boolean) => void,

}



const ProfileMenu = ({ setGroup, setSettings }: ProfileMenuProps) => {
  const navigate = useNavigate();
  const { setIsAuth } = useAuth();
  const logout = () => {
    localStorage.removeItem("access_token")
    setIsAuth(false)
    navigate("/sign-in")
  }

  return (
    <>
      <div className="flex-col transition-all duration-700 ">
        <div className="flex p-3 cursor-pointer" onClick={() => setGroup(true)}>
          <img src="/group.svg" alt="group" width={25} height={25} className='' />
          <p className='h1-bold font-semibold pl-3'>Создать группу</p>
        </div>
        <div className="flex p-3 cursor-pointer" onClick={() => setSettings(true)}>
          <img src="/setting.svg" alt="settings" width={25} height={25} />
          <p className='h1-bold font-semibold pl-3'>Настройки</p>
        </div>
        <div className="flex p-3 cursor-pointer" onClick={() => logout()}>
          <img src="/arrowl.svg" alt="home" width={25} height={25} />
          <p className='h1-bold font-semibold pl-3'>Выйти</p>
        </div>
      </div>
    </>
  )
}

export default ProfileMenu