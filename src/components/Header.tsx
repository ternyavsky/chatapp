import RightUpSide from './RightUpSide'
import { Input } from './ui/input'

type HeaderProps = {
    chngMenu: (arg: boolean) => void;
}

const Header = ({ chngMenu }: HeaderProps) => {
    return (
        <div className="h-auto flex">
            <div className="bg-[#373737] w-[545px] flex-center">
                <img src="bilan.svg" alt="" className='rounded-[50px] m-2 cursor-pointer' width={80} onClick={() => chngMenu(true)} />
                <Input type='search' className='rounded-[50px] bg-[#282828] focus-visible:text-white m-2 w-full' placeholder='Пoиск...' />
            </div>
            <RightUpSide />
        </div>
    )
}

export default Header