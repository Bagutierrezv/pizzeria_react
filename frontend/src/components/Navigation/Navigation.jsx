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
          <Link to='/' className='botonNav'>🍕Home</Link>
          {
          token
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
          <Link to='/cart' className='botonNavCart'>🛒 Total: ${formatearMontos(total)}</Link>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default Navigation
