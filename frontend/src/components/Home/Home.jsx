import CardPizza from '../CardPizza/CardPizza'
import Header from '../Header/Header'
import { Container, Row, Col } from 'react-bootstrap'
import './Home.css'
import { pizzas } from '../../helpers/pizzas'

const Home = () => {
  return (
    <>
      <Header />
      <Container>
        <Row className='justify-content-md-center align-content-center'>
          {pizzas.map((pizza) =>
            <Col lg='4' md='6' key={pizza.id}>
              <CardPizza
                name={pizza.name}
                price={pizza.price}
                ingredients={pizza.ingredients}
                img={pizza.img}
              />
            </Col>
          )}

        </Row>
      </Container>
    </>
  )
}

export default Home
