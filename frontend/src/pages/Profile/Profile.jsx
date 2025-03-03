import Button from 'react-bootstrap/Button'
import './Profile.css'

const Profile = () => {
  return (
    <section className='primer-contenedor-profile'>
      <div className='contenedor-profile'>
        <img src='/assets/profile.png' alt='' className='img-profile' />
        <p><b>Nombre: </b>Bárbara Gutiérrez</p>
        <p><b>Fecha de nacimiento: </b>30-05-1998</p>
        <p><b>Correo: </b>ba.gutierrezv30@gmail.com</p>
        <Button variant='dark'> 🔒 Cerrar Sesión </Button>
      </div>
    </section>

  )
}

export default Profile
