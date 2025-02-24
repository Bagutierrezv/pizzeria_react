import { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'
import './Pizzas.css'
import formatearMontos from '../../helpers/montos'

const Pizzas = () => {
  const [pizza, setPizza] = useState()
  const url = 'http://localhost:5000/api/pizzas/p001'

  const getPizza = async () => {
    try {
      const resultadoPizza = await fetch(url)
      const dataPizza = await resultadoPizza.json()
      setPizza(dataPizza)
    } catch (error) {
      console.log(error.message)
    }
  }

  useEffect(() => {
    getPizza()
  }, [])

  return (
    pizza
      ? (
        <main className='contenedor'>
          <div>
            <img src={pizza.img} />
          </div>
          <div className='descripcion'>
            <h1>Pizza {pizza.name}</h1>
            <p>{pizza.desc}</p>
            <p>{pizza.ingredients.map((ingredient) => <li key={ingredient}>{ingredient}</li>)}</p>
            <div className='d-flex justify-content-around'>
              <h3>Precio: ${formatearMontos(pizza.price)}</h3>
              <Button variant='dark'>Añadir 🛒</Button>
            </div>
          </div>
        </main>

        )

      : ('')

  )
}

export default Pizzas
