import './header.css'

const Header = () => {
  return (
    <div className="header d-flex flex-column justify-content-center text-center">
        <h1>¡Pizzeria Mamma Mia!</h1>
        <p>¡Tenemos las mejores pizzas que podrás encontrar!</p>
        <hr className='w-75 mx-auto' />
    </div>
  )
}

export default Header