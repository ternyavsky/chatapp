import RightUpSide from './RightUpSide'
import { Input } from './ui/input'

const Header = () => {
    return (
        <div className="h-auto flex">
            <div className="bg-[#373737] w-[545px] flex-center">
                <img src="/src/assets/bilan.svg" alt="" className='rounded-[50px] m-2' width={80} />
                <Input type='search' className='rounded-[50px] bg-[#282828] focus-visible:text-white m-2 w-full' placeholder='Пoиск...' />
            </div>
            <RightUpSide />
        </div>
    )
}

export default Header