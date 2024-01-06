import { useLocation } from 'react-router-dom';
import { Input } from '@/components/ui/input'
import { useAuth } from '@/context/AuthContext';
import RightUpSide from '@/components/RightUpSide';
import UserRightUpSide from '@/components/UserRightUpSide';
type HeaderProps = {
    chngMenu: (arg: boolean) => void;
    setSearchValue: (arg: string) => void
}

const Header = ({ chngMenu, setSearchValue }: HeaderProps) => {
    const { pathname } = useLocation();
    const { user } = useAuth();
    return (
        <>
            <div className="h-auto flex">
                <div className={`${pathname === "/main" ? "bg-[#373737] w-[545px] flex-center" : "hidden sm:w-[545px] sm:flex-center"}`} >
                    <img src={user.img ? user.img : "/bilan.svg"} alt="logo" className='rounded-[50px] m-2 cursor-pointer' width={80} onClick={() => chngMenu(true)} />
                    <Input type='search' className='rounded-[50px] bg-[#282828] focus-visible:text-white m-2 w-full' onChange={(e) => {
                        setSearchValue(e.currentTarget.value) /* inner state */
                    }} placeholder='Пoиск...' />
                </div>
                {pathname.includes("/main/n")
                    ?
                    <UserRightUpSide key={document.location.href} />
                    :
                    <RightUpSide key={document.location.href} />
                }
            </div>

        </>

    )
}

export default Header