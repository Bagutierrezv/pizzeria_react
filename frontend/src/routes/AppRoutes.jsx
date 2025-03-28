import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Pizza from '../pages/Pizza/Pizza'
import Login from '../pages/Login/Login'
import Register from '../pages/Register/Register'
import Cart from '../pages/Cart/Cart'
import Profile from '../pages/Profile/Profile'
import NotFound from '../pages/NotFound/NotFound'
import ProtectRoute from '../components/ProtectRoute'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/pizza/:id' element={<Pizza />} />
      <Route
        path='/cart' element={
          <ProtectRoute>
            <Cart />
          </ProtectRoute>
          }
      />
      <Route
        path='/register' element={<Register />}
      />
      <Route
        path='/login' element={<Login />}
      />
      <Route
        path='/profile' element={
          <ProtectRoute>
            <Profile />
          </ProtectRoute>
          }
      />
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default AppRoutes
