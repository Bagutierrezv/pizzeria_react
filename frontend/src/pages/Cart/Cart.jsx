import { useContext } from 'react'
import Button from 'react-bootstrap/Button'
import './Cart.css'
import { CartContext } from '../../context/CartContext'
import formatearMontos from '../../helpers/montos'

const Cart = () => {
  const { añadirPizza, quitarPizza, total, pizzasEnCarrito } = useContext(CartContext)
  const cart = pizzasEnCarrito()
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
        <Button className='btn btn-dark btn-outline-info px-4'>Pagar</Button>
      </section>
    </>
  )
}
export default Cart
