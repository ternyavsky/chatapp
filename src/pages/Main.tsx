import ChatWindow from '@/components/ChatWindow'
import Header from '@/components/Header'
import LeftBar from '@/components/LeftBar'
import ProfileSideBar from '@/components/ProfileSideBar'
import { useState } from 'react'

const Main = () => {
    const [menu, setMenu] = useState(false);
    return (
        <>

            {menu === false && <Header chngMenu={setMenu} />}

            {/* <ProfileSideBar /> */}
            <div className="flex">
                {menu && <ProfileSideBar chngMenu={setMenu} />}
                {menu === false && <LeftBar />}

                <ChatWindow />
            </div>
        </>
    )
}

export default Main