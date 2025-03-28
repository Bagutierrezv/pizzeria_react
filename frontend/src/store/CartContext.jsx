import { createContext, useState } from 'react'

export const CartContext = createContext({})

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])

  const calcularTotalCompra = () => {
    return cart.reduce((totalCompra, pizza) => {
      return totalCompra + pizza.price * pizza.count
    }, 0)
  }

  const añadirPizza = ({ id, img, name, price }) => {
    const infoPizzaCart = [...cart]
    const pizzaIndex = infoPizzaCart.findIndex((e) => e.id === id)
    if (pizzaIndex === -1) {
      const nuevaPizza = {
        id,
        name,
        price,
        img,
        count: 1
      }
      infoPizzaCart.push(nuevaPizza)
    } else {
      infoPizzaCart[pizzaIndex] = { ...infoPizzaCart[pizzaIndex], count: infoPizzaCart[pizzaIndex].count + 1 }
    }
    setCart(infoPizzaCart)
  }

  const quitarPizza = (pizza) => {
    const infoPizzaCart = [...cart]
    const indexPizzaCart = infoPizzaCart.findIndex(e => e.id === pizza.id)
    infoPizzaCart[indexPizzaCart].count -= 1
    setCart(infoPizzaCart)
  }

  const pizzasEnCarrito = () => {
    return cart
  }

  const total = calcularTotalCompra()

  const contextState = {
    calcularTotalCompra,
    añadirPizza,
    quitarPizza,
    total,
    pizzasEnCarrito
  }

  return (
    <CartContext.Provider value={contextState}>
      {children}
    </CartContext.Provider>
  )
}
