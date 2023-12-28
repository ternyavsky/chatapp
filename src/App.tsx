import { Route, Routes } from 'react-router-dom'

import Home from '@/components/Home'
import SigninForm from './forms/SigninForm'
import { Toaster } from './components/ui/toaster'
import SignupForm from './forms/SignupForm'
import Main from './pages/Main'
import ChatWindow from './components/ChatWindow'
import AuthLayout from './pages/AuthLayout'

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
        </Route>
      </Routes>

      <Toaster />

    </>
  )
}

export default App
