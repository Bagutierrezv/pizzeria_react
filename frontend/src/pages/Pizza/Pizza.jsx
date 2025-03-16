import { useContext, useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'
import './Pizza.css'
import formatearMontos from '../../helpers/montos'
import { useParams } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import { toast } from 'react-toastify'

const Pizza = () => {
  const { id } = useParams()
  const [pizza, setPizza] = useState()
  const { añadirPizza } = useContext(CartContext)

  const url = `http://localhost:5000/api/pizzas/${id}`

  const getPizza = async () => {
    try {
      const resultadoPizza = await fetch(url)
      const dataPizza = await resultadoPizza.json()
      setPizza(dataPizza)
    } catch (error) {
      console.log(error.message)
    }
  }

  const agregarPizza = ({ id, img, name, price }) => {
    añadirPizza({ id, img, name, price })
    toast('Se agregó la pizza!')
  }

  useEffect(() => {
    getPizza()
  }, [])

  return (
    pizza
      ? (
        <main className='contenedor-pizza'>
          <div>
            <img className='img-pizza' src={pizza.img} />
          </div>
          <div className='descripcion-pizza'>
            <h1 className='descripcion-pizza-titulo'>Pizza {pizza.name}</h1>
            <p>{pizza.desc}</p>
            <p>{pizza.ingredients.map((ingredient) => <li key={ingredient}>{ingredient}</li>)}</p>
            <div className='d-flex justify-content-around'>
              <h3>Precio: ${formatearMontos(pizza.price)}</h3>
              <Button variant='dark' onClick={() => agregarPizza(pizza)}>Añadir 🛒</Button>
            </div>
          </div>
        </main>

        )

      : ('')

  )
}

export default Pizza
