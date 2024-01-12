import { Route, Routes, useBeforeUnload } from 'react-router-dom'

import Home from '@/components/Home'
import SigninForm from '@/forms/SigninForm'
import { Toaster } from '@/components/ui/toaster'
import SignupForm from '@/forms/SignupForm'
import Main from '@/pages/Main'
import ChatWindow from '@/components/ChatWindow'
import AuthLayout from '@/pages/AuthLayout'
import { connectCall, disconnectCall, socket } from './api/ws'
import { useEffect } from 'react'
import { useAuth } from './context/AuthContext'
import UserWindow from './components/UserWindow'

function App() {

  return (
    <>

      <Routes>
        <Route element={<Home />} path={"/"} />
        <Route element={<AuthLayout />}>
          <Route element={<SigninForm />} path={"/sign-in"} />
          <Route element={<SignupForm />} path={"/sign-up"} />
        </Route>
        <Route element={<Main />} path={'/main'}>
          <Route element={<ChatWindow />} path={"/main/:id"} />
          <Route element={<UserWindow />} path={"/main/n/:username"} />
        </Route>
      </Routes>

      <Toaster />

    </>
  )
}

export default App
