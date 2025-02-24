import CardPizza from '../CardPizza/CardPizza'
import Header from '../Header/Header'
import { Container, Row, Col } from 'react-bootstrap'
import './Home.css'
import { useEffect, useState } from 'react'
// import { pizzas } from '../../helpers/pizzas'

const Home = () => {
  const [pizzas, setPizzas] = useState([])
  const url = 'http://localhost:5000/api/pizzas'

  const getPizzas = async () => {
    try {
      const resultado = await fetch(url)
      const data = await resultado.json()
      setPizzas(data)
    } catch (error) {
      console.log(error.message)
    }
  }

  useEffect(() => {
    getPizzas()
  }, [])

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
