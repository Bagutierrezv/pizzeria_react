import { createContext, useState } from 'react'
import axios from 'axios'
import { toast } from 'sonner'
import { useNavigate } from 'react-router-dom'

export const UserContext = createContext({})

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null)

  const navigate = useNavigate()

  const logout = () => {
    setUser(null)
    navigate('/')
  }

  const getUser = () => {
    return user
  }

  const login = async (email, password) => {
    try {
      const URL = 'http://localhost:5000/api/auth/login'
      const payload = { email, password }
      const res = await axios.post(URL, payload)
      /* localStorage.setItem('token', user.data.token) */
      toast.info('Inicio de sesión exitoso')
      setUser(res.data)
      navigate('/')
    } catch (error) {
      console.log('err: ', error)
      toast.error('Usuario y/o contraseña son incorrectos')
    }
  }

  const register = async (email, password) => {
    try {
      const URL = 'http://localhost:5000/api/auth/register'
      const payload = { email, password }
      const res = await axios.post(URL, payload)
      toast.success('Registro exitoso')
      setUser(res.data)
      navigate('/')
    } catch (error) {
      console.log('err: ', error)
      toast.error('Hubo un error al intentar registrarte')
    }
  }

  const profile = async () => {
    try {
      const URL = 'http://localhost:5000/api/auth/me'
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`
        }
      }
      const res = await axios.get(URL, config)
      return res.data
    } catch (error) {
      console.log('err: ', error)
    }
  }

  const contextState = {
    login,
    register,
    profile,
    logout,
    getUser
  }

  return (
    <UserContext.Provider value={contextState}>
      {children}
    </UserContext.Provider>
  )
}
