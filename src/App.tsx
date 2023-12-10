import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from '@/components'
import SigninForm from './forms/SigninForm'
import { Toaster } from './components/ui/toaster'
import SignupForm from './forms/SignupForm'
import Main from './pages/Main'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Home />} path={"/"} />
          <Route element={<SigninForm />} path={"/sign-in"} />
          <Route element={<SignupForm />} path={"/sign-up"} />
          <Route element={<Main />} path={"/main"} />
        </Routes>
      </BrowserRouter>

      <Toaster />

    </>
  )
}

export default App
