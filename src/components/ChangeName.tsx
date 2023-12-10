import React from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'

const ChangeName = () => {
    return (<>
        <Input placeholder="Введите ник" className="rounded-[50px] flex-center border-[#464646] focus:border-4 bg-[#626262] h1-bold font-semibold flex w-70 mx-2  mt-10" value='Богданчик стелит' />
        <Button variant={"outline"} type="submit" className="rounded-[50px] bg-inherit border-[3px] h1-bold font-semibold w-52 mx-auto mt-4">Сохранить изменения</Button>
    </>
    )
}

export default ChangeName