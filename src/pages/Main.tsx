import ChatWindow from '@/components/ChatWindow'
import Header from '@/components/Header'
import LeftBar from '@/components/LeftBar'
import ProfileSideBar from '@/components/ProfileSideBar'
import RightUpSide from '@/components/RightUpSide'
import React from 'react'

const Main = () => {
    return (
        <>

            {/* <Header /> */}

            {/* <ProfileSideBar /> */}
            <div className="flex">
                <ProfileSideBar/>
                {/* <LeftBar /> */}
                <ChatWindow />
            </div>
        </>
    )
}

export default Main