import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navigation/Navigation'
import Login from './pages/Login/Login'
import Home from './pages/Home/Home'
import Pizza from './pages/Pizza/Pizza'
import Register from './pages/Register/Register'
import Cart from './pages/Cart/Cart'
import Profile from './pages/Profile/Profile'
import NotFound from './pages/NotFound/NotFound'
import { ToastContainer } from 'react-toastify'
import { useContext } from 'react'
import { UserContext } from './context/UserContext'

const App = () => {
  const { getToken } = useContext(UserContext)
  const token = getToken()

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pizza/:id' element={<Pizza />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/register' element={!token ? <Register /> : <Navigate to='/' />} />
        <Route path='/login' element={!token ? <Login /> : <Navigate to='/' />} />
        <Route path='/profile' element={token ? <Profile /> : <Navigate to='/login' />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <ToastContainer />
      <Footer />
    </BrowserRouter>
  )
}

export default App
