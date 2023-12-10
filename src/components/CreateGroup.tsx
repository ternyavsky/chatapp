import React from 'react'
import { Button } from './ui/button'
import { Input } from './ui/input'

const CreateGroup = () => {
    return (
        <>
            <div className='h-9  bg-[#2D2D2D]  flex mx-auto w-full justify-between'>
                <img src="/src/assets/arrowl.svg" alt="" className='p-[10px]' width={40} />
                <div className="flex items-center mx-auto  ">
                    <img src="/src/assets/group.svg" alt="" width={20} />
                    <p className='h1-bold ml-2 font-semibold '>Создание группы</p>
                </div>
            </div>
            <div className="flex-center mx-auto p-3">
                <img src="/src/assets/group.svg" alt="" className='border-2 rounded-full ' width={80} />
                <Button variant={"outline"} type="submit" className="rounded-[50px] bg-inherit border-[3px] h1-bold font-semibold w-52 mx-auto  ml-2">Изменить изображение</Button>
            </div>
            <div className="flex flex-col items-center justify-center">
                <p className='h1-bold font-semibold'>Название группы</p>
                <Input placeholder="Введите название группы" className="rounded-[50px] border-[#464646] focus:border-4 bg-[#626262] h1-bold font-semibold flex w-[90%] mt-2" />
                <Button variant={"outline"} type="submit" className="rounded-[50px] bg-inherit border-[3px] h1-bold font-semibold w-52 mt-3">+ Добавить участников</Button>

                <Button variant={"outline"} type="submit" className="rounded-[50px] border-[3px] border-[#297AFF] h1-bold font-semibold w-52 mt-16 bg-[#297AFF] hover:opacity-70 hover:bg-[#297AFF] hover:h1-bold">Создать группу</Button>
            </div>
        </>
    )
}

export default CreateGroup