import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navigation/Navigation'
import Login from './pages/Login/Login'
import Home from './pages/Home/Home'
import Pizza from './pages/Pizza/Pizza'
import Register from './pages/Register/Register'
import Cart from './pages/Cart/Cart'
import Profile from './pages/Profile/Profile'
import NotFound from './pages/NotFound/NotFound'
import { CartProvider } from './context/CartContext'
import { ToastContainer } from 'react-toastify'

const App = () => {
  return (
    <BrowserRouter>
      <CartProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/pizza/p001' element={<Pizza />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <ToastContainer />
        <Footer />
      </CartProvider>
    </BrowserRouter>
  )
}

export default App
