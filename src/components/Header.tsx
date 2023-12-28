import { useLocation } from 'react-router-dom';
import RightUpSide from './RightUpSide'
import { Input } from './ui/input'
import { useAuth } from '@/context/AuthContext';
type HeaderProps = {
    chngMenu: (arg: boolean) => void;
}

const Header = ({ chngMenu }: HeaderProps) => {
    const { pathname } = useLocation();
    const { user } = useAuth();

    return (
        <>

            <div className="h-auto flex">
                <div className={`${pathname === "/main" ? "bg-[#373737] w-[545px] flex-center" : "hidden sm:w-[545px] sm:flex-center"}`}>
                    <img src={user.img ? user.img : "/bilan.svg"} alt="logo" className='rounded-[50px] m-2 cursor-pointer' width={80} onClick={() => chngMenu(true)} />
                    <Input type='search' className='rounded-[50px] bg-[#282828] focus-visible:text-white m-2 w-full' placeholder='Пoиск...' />
                </div>

                <RightUpSide />
            </div>

        </>

    )
}

export default Header