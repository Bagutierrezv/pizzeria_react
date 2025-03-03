import { Link } from 'react-router-dom'
import imgNotFound from '../../assets/img/NotFound.png'
import './NotFound.css'

const NotFound = () => {
  return (
    <section className='seccion-notfound'>
      <img src={imgNotFound} alt='Not Found' className='img-notfound' />
      <Link to='/' className='bnt-notfound'>Volver al Home 🍕</Link>
    </section>
  )
}

export default NotFound
