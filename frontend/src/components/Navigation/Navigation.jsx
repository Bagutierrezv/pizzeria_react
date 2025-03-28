import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import formatearMontos from '../../helpers/montos'
import './Navigation.css'
import { Link, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../store/CartContext'
import { UserContext } from '../../store/UserContext'
import { Button } from 'react-bootstrap'
import Swal from 'sweetalert2'

const Navigation = () => {
  const { total } = useContext(CartContext)
  const { getUser, logout } = useContext(UserContext)
  const navigate = useNavigate()

  const handleClickCart = () => {
    if (!user) {
      Swal.fire({
        icon: 'warning',
        title: 'No tienes tu sesion iniciada',
        text: 'Debes iniciar sesión para acceder al carrito de compras',
        confirmButtonColor: '#3085d6'
      })
      navigate('/login')
    } else {
      navigate('/cart')
    }
  }

  const cerrarSesion = () => {
    logout()
  }

  const user = getUser()
  return (
    <Navbar bg='dark' data-bs-theme='dark' expand='lg'>
      <Container>
        <Navbar.Brand href='/'>¡Pizzeria Mamma Mia!</Navbar.Brand>
        <Nav className='me-auto'>
          <Link to='/' className='botonNav'>🍕Home</Link>
          {
          user
            ? <>
              <Link to='/profile' className='botonNav'>🔓Profile</Link>
              <Button variant='outline-light' className='botonNav' onClick={() => cerrarSesion()}>🔒Logout</Button>
            </>
            : <>
              <Link to='/login' className='botonNav'>🔐Login</Link>
              <Link to='/register' className='botonNav'>🔐Register</Link>
              </>
            }
        </Nav>
        <Nav className='ms-auto'>
          <Button variant='outline-info' onClick={handleClickCart}>🛒 Total: ${formatearMontos(total)}</Button>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default Navigation
