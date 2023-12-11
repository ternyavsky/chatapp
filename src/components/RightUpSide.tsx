import { Input } from "./ui/input"
import diman from "../../public/diman.svg"
import online from "../../public/online.svg"
import rightMenu from "../../public/right-menu.svg"
import { useLocation } from "react-router-dom"
const RightUpSide = () => {
    const { pathname } = useLocation();
    return (
        <>
            <div className="bg-[#302F2F] hidden sm:flex sm:w-screen">
                {pathname !== "/main" &&
                    <>
                        <img src={diman} alt="" className='rounded-[50px] m-2 cursor-pointer' width={80} />
                        <div className="flex-col my-auto ml-2  ">
                            <h1 className='h1-bold font-bold'>Диман</h1>
                            <div className="flex gap-1">
                                <img src={online} alt="last_message" width={7} />
                                <p className='h1-bold text-[16px] font-medium'>печатает...</p>
                            </div>

                        </div>
                        <img src={rightMenu} alt="" className="absolute right-0 p-4 cursor-pointer" />
                    </>

                }

            </div>
        </>
    )
}

export default RightUpSide