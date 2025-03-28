import { useContext } from 'react'
import Button from 'react-bootstrap/Button'
import './Cart.css'
import { CartContext } from '../../store/CartContext'
import formatearMontos from '../../helpers/montos'
import { UserContext } from '../../store/UserContext'
import axios from 'axios'
import Swal from 'sweetalert2'

const Cart = () => {
  const { añadirPizza, quitarPizza, total, pizzasEnCarrito } = useContext(CartContext)
  const { getUser } = useContext(UserContext)

  const cart = pizzasEnCarrito()
  const user = getUser()

  const handleCart = async (user) => {
    try {
      const URL = 'http://localhost:5000/api/checkouts'
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`
        }
      }
      const payload = cart
      const respuesta = await axios.post(URL, payload, config)
      Swal.fire({
        title: 'Pago exitoso',
        icon: 'success',
        draggable: true
      })
      console.log(respuesta)
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops... Algo salió mal',
        text: 'Intentalo nuevamente'
      })
      console.log(error)
    }
  }

  return (
    <>
      <h3 className='titulo-carrito'>Detalles del pedido:</h3>
      {
      cart.map(pizza => pizza.count > 0
        ? (
          <section key={pizza.id}>
            <div className='cantidad-carrito'>
              <img className='imagen-carrito' src={pizza.img} alt={pizza.name} />
              <div className='nombre-pizza-carrito'>Pizza {pizza.name}</div>
              <div className='precio-carrito'>${formatearMontos(pizza.price * pizza.count)}</div>
              <div className='botones-carrito'>
                <Button className='btn btn-sm btn-light btn-outline-danger m-1 sumar-restar-carrito' onClick={() => quitarPizza(pizza)}>-</Button>
                <div>{pizza.count}</div>
                <Button className='btn btn-sm btn-light btn-outline-primary m-1  sumar-restar-carrito' onClick={() => añadirPizza(pizza)}>+</Button>
              </div>
            </div>
          </section>
          )
        : ('')
      )
}
      <section className='pagar-carrito'>
        <h4>Total: ${formatearMontos(total)}</h4>
        <Button className='btn btn-dark btn-outline-info px-4' onClick={() => handleCart(user)} disabled={!user}>Pagar</Button>
      </section>
    </>
  )
}
export default Cart
