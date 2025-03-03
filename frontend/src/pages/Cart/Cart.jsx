import { useState } from 'react'
import { pizzaCart } from '../../helpers/pizzas'
import Button from 'react-bootstrap/Button'
import './Cart.css'

const Cart = () => {
  const [cart, setCart] = useState(pizzaCart)

  const calcularTotalCompra = (cart) => {
    return cart.reduce((totalCompra, pizza) => {
      return totalCompra + pizza.price * pizza.count
    }, 0)
  }

  const sumarPizzas = (pizza) => {
    const infoPizzaCart = [...pizzaCart]
    const indexPizzaCart = infoPizzaCart.findIndex(e => e.id === pizza.id)
    infoPizzaCart[indexPizzaCart].count += 1
    setCart(infoPizzaCart)
  }

  const restarPizzas = (pizza) => {
    const infoPizzaCart = [...pizzaCart]
    const indexPizzaCart = infoPizzaCart.findIndex(e => e.id === pizza.id)
    infoPizzaCart[indexPizzaCart].count -= 1
    setCart(infoPizzaCart)
  }

  const total = calcularTotalCompra(cart)
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
              <div className='precio-carrito'>${pizza.price * pizza.count}</div>
              <div className='botones-carrito'>
                <Button className='btn btn-sm btn-light btn-outline-danger m-1 sumar-restar-carrito' onClick={() => restarPizzas(pizza)}>-</Button>
                <div>{pizza.count}</div>
                <Button className='btn btn-sm btn-light btn-outline-primary m-1  sumar-restar-carrito' onClick={() => sumarPizzas(pizza)}>+</Button>
              </div>
            </div>
          </section>
          )
        : ('')
      )
}
      <section className='pagar-carrito'>
        <h4>Total: ${total}</h4>
        <Button className='btn btn-dark btn-outline-info px-4'>Pagar</Button>
      </section>
    </>
  )
}
export default Cart
