
type ProfileMenuProps = {
  setGroup: (arg: boolean) => void,
  setSettings: (arg: boolean) => void,

}

const ProfileMenu = ({ setGroup, setSettings }: ProfileMenuProps) => {
  return (
    <>
      <div className="flex-col">
        <div className="flex p-3 cursor-pointer" onClick={() => setGroup(true)}>
          <img src="/src/assets/group.svg" alt="" className='' />
          <p className='h1-bold font-semibold pl-3'>Создать группу</p>
        </div>
        <div className="flex p-3 cursor-pointer" onClick={() => setSettings(true)}>
          <img src="/src/assets/setting.svg" alt="" />
          <p className='h1-bold font-semibold pl-3'>Настройки</p>
        </div>
      </div>
    </>
  )
}

export default ProfileMenu