import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import formatearMontos from '../../helpers/montos'
import formatearIngredientes from '../../helpers/ingredientes'
import './CardPizza.css'

const CardPizza = ({ img, name, price, ingredients }) => {
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
            <Button variant='outline-dark'>Ver mas 👀</Button>
            <Button variant='dark'>Añadir 🛒</Button>
          </div>
        </ListGroup.Item>
      </ListGroup>
    </Card>
  )
}

export default CardPizza
