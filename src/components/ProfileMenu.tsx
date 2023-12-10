import React from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'

const ProfileMenu = () => {
  return (
      <>
          <div className="flex-col">
            <div className="flex p-3">
                <img src="/src/assets/group.svg" alt="" />
                <p className='h1-bold font-semibold pl-3'>Создать группу</p>
            </div>
            <div className="flex p-3">
                <img src="/src/assets/setting.svg" alt="" />
                <p className='h1-bold font-semibold pl-3'>Настройки</p>
            </div>
          </div>
      </>
  )
}

export default ProfileMenu