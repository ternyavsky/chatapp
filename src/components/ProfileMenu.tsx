import group from "../../public/group.svg"
import settings from "../../public/setting.svg"


type ProfileMenuProps = {
  setGroup: (arg: boolean) => void,
  setSettings: (arg: boolean) => void,

}

const ProfileMenu = ({ setGroup, setSettings }: ProfileMenuProps) => {
  return (
    <>
      <div className="flex-col">
        <div className="flex p-3 cursor-pointer" onClick={() => setGroup(true)}>
          <img src={group} alt="" className='' />
          <p className='h1-bold font-semibold pl-3'>Создать группу</p>
        </div>
        <div className="flex p-3 cursor-pointer" onClick={() => setSettings(true)}>
          <img src={settings} alt="" />
          <p className='h1-bold font-semibold pl-3'>Настройки</p>
        </div>
      </div>
    </>
  )
}

export default ProfileMenu