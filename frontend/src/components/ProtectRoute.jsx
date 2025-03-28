import { useContext } from 'react'
import { UserContext } from '../store/UserContext'
import { Navigate } from 'react-router-dom'

const ProtectRoute = ({ children }) => {
  const { getUser } = useContext(UserContext)
  const user = getUser()
  return user ? children : <Navigate to='/' />
}

export default ProtectRoute
