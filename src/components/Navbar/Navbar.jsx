import Button from 'react-bootstrap/Button';
import formatearMontos from '../../helpers/montos';
import './Navbar.css'

const Navbar = () => {
  const total = 25000;
  const token = false;

  return (
    <div className="d-flex justify-content-between bg-dark align-content-center nav">
      <div className='d-flex'>
        <h6 className='m-1 text-white align-content-center'>¡Pizzeria Mamma Mia!</h6>
        <Button className="btn btn-sm btn-dark btn-outline-light px-3 m-1">🍕Home</Button>
        {
          token ?
            <>
              <Button className="btn btn-sm btn-dark btn-outline-light px-3 m-1">🔓Profile</Button>
              <Button className="btn btn-sm btn-dark btn-outline-light px-3 m-1">🔒Logout</Button>
            </> :
            <>
              <Button className="btn btn-sm btn-dark btn-outline-light px-3 m-1">🔐Login</Button>
              <Button className="btn btn-sm btn-dark btn-outline-light px-3 m-1">🔐Register</Button>
            </>
        }
      </div>
      <div>
        <Button className="btn btn-sm btn-dark btn-outline-info px-3 m-1">🛒 Total: ${formatearMontos(total)}</Button>

      </div>
    </div>
  )
}

export default Navbar