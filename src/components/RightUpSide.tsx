import { useLocation, useNavigate } from "react-router-dom"
const RightUpSide = () => {
    const { pathname } = useLocation();
    const navigate = useNavigate();
    return (
        <>

            <div className={` bg-[#302F2F] ${pathname !== "/main" ? "flex w-screen" : "sm:w-screen"} `}>
                {pathname !== "/main" &&
                    <>
                        <img src="/arrowl.svg" alt="" width={50} className="p-2 sm:hidden" onClick={() => navigate("/main")} />
                        <img src="/diman.svg" alt="" className='rounded-[50px] m-2 cursor-pointer' width={80} />
                        <div className="flex-col my-auto ml-2  ">
                            <h1 className='h1-bold font-bold'>Диман</h1>
                            <div className="flex gap-1">
                                <img src="/online.svg" alt="last_message" width={7} />
                                <p className='h1-bold text-[16px] font-medium'>печатает...</p>
                            </div>

                        </div>
                        <img src="/right-menu.svg" alt="" className="absolute right-0 p-4 cursor-pointer" />
                    </>

                }
            </div>

        </>
    )
}

export default RightUpSide