import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import formatearMontos from '../../helpers/montos'
import './CardPizza.css'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'

const CardPizza = ({ id, img, name, price, ingredients }) => {
  const { añadirPizza } = useContext(CartContext)

  const agregarPizza = ({ id, img, name, price }) => {
    añadirPizza({ id, img, name, price })
    toast('Se agregó la pizza!')
  }

  return (
    <Card className='card'>
      <Card.Img variant='top' src={img} />
      <Card.Body>
        <Card.Title>Pizza {name}</Card.Title>
      </Card.Body>
      <ListGroup className='list-group-flush'>
        <ListGroup.Item style={{ minHeight: '100px' }}>
          <Card.Text className='text-center'>
            🍕Ingredientes:
          </Card.Text>
          <Card.Text className='text-center' style={{ fontSize: 13 }}>
            {ingredients.map(ingredients => <li key={ingredients}>{ingredients}</li>)}
          </Card.Text>
        </ListGroup.Item>
        <ListGroup.Item>
          <Card.Title className='text-center p-2'>Precio: ${formatearMontos(price)}</Card.Title>
          <div className='d-flex justify-content-between'>
            <Link to={`/pizza/${id}`} className='text-decoration-none verMas'>Ver mas 👀</Link>
            <Button variant='dark' onClick={() => agregarPizza({ id, img, name, price })}>Añadir 🛒</Button>
          </div>
        </ListGroup.Item>
      </ListGroup>
    </Card>
  )
}

export default CardPizza
