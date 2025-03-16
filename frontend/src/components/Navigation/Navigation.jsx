import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import formatearMontos from '../../helpers/montos'
import './Navigation.css'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { UserContext } from '../../context/UserContext'
import { Button } from 'react-bootstrap'

const Navigation = () => {
  const { total } = useContext(CartContext)
  const { getToken, logout } = useContext(UserContext)

  const cerrarSesion = () => {
    logout()
  }

  const token = getToken()
  return (
    <Navbar bg='dark' data-bs-theme='dark' expand='lg'>
      <Container>
        <Navbar.Brand href='/'>¡Pizzeria Mamma Mia!</Navbar.Brand>
        <Nav className='me-auto'>
          <Link to='/' className='text-decoration-none ms-3 text-white'>🍕Home</Link>
          {
          token
            ? <>
              <Link to='/profile' className='text-decoration-none ms-3 text-white'>🔓Profile</Link>
              <Button className='text-decoration-none ms-3 text-white' onClick={() => cerrarSesion()}>🔒Logout</Button>
              </>
            : <>
              <Link to='/login' className='text-decoration-none ms-3 text-white'>🔐Login</Link>
              <Link to='/register' className='text-decoration-none ms-3 text-white'>🔐Register</Link>
            </>
            }
        </Nav>
        <Nav className='ms-auto'>
          <Link to='/cart' className='text-decoration-none ms-3 text-white'>🛒 Total: ${formatearMontos(total)}</Link>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default Navigation
