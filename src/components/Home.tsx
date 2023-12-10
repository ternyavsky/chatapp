import { Link } from 'react-router-dom'
import { Button } from './ui/button'

const Home = () => {
    return (
        <>
            <div className="bg-[url('bg.svg')] min-h-screen w-screen bg-no-repeat bg-cover flex items-center flex-col object-cover">
                <img src="ISAP.svg" alt="logo" className="pt-12" width={164} height={78} />
                <h1 className="h1-bold flex-center text-1xl font-black pt-10 md:text-4xl">Новый ИСиП мессенджер</h1>
                <h1 className="h1-bold pt-6 font-black text-xl md:text-3xl">Присоединяйся к нам!</h1>
                <Link to={"/sign-in"} className="m-auto">
                    <Button variant={"outline"} className="rounded-[50px] bg-inherit border-[3px] h-14 w-[370px] text-2xl h1-bold font-extrabold ">Войти в чат</Button>
                </Link>

            </div>
        </>
    )
}

export default Home