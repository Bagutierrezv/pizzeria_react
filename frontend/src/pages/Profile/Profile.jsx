import Button from 'react-bootstrap/Button'
import './Profile.css'
import { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../store/UserContext'

const Profile = () => {
  const [userProfile, setUserProfile] = useState(null)
  const { profile, logout } = useContext(UserContext)

  useEffect(() => {
    const fetchUserProfile = async () => {
      const info = await profile()
      setUserProfile(info)
    }

    fetchUserProfile()
  }, [])

  const handleLogout = () => {
    logout()
  }

  return (
    <section className='primer-contenedor-profile'>
      {
        userProfile
          ? (
            <div className='contenedor-profile'>
              <img src='/assets/profile.png' alt='' className='img-profile' />
              <p><b>Correo: </b>{userProfile.email}</p>
              <Button variant='dark' onClick={() => handleLogout()}> 🔒 Cerrar Sesión </Button>
            </div>
            )
          : (<div>No hay info</div>)
      }

    </section>
  )
}

export default Profile
