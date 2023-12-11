import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from '@/components'
import SigninForm from './forms/SigninForm'
import { Toaster } from './components/ui/toaster'
import SignupForm from './forms/SignupForm'
import Main from './pages/Main'
import ChatWindow from './components/ChatWindow'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Home />} path={"/"} />
          <Route element={<SigninForm />} path={"/sign-in"} />
          <Route element={<SignupForm />} path={"/sign-up"} />
          <Route element={<Main />} path={'/main'}>
            <Route element={<ChatWindow />} path={"/main/:id"} />
          </Route>
        </Routes>
      </BrowserRouter>

      <Toaster />

    </>
  )
}

export default App
