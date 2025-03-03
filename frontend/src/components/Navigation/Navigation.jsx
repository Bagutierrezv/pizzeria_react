import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import formatearMontos from '../../helpers/montos'
import './Navigation.css'
import { Link } from 'react-router-dom'

const Navigation = () => {
  const total = 25000
  const token = true
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
              <Link to='/' className='text-decoration-none ms-3 text-white'>🔒Logout</Link>
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
