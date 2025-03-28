import { useContext, useState } from 'react'
import { Toaster, toast } from 'sonner'
import './Register.css'
import { UserContext } from '../../store/UserContext'

const Register = () => {
  const [registro, setRegistro] = useState({
    email: '',
    clave: '',
    confirmarClave: ''
  })

  const { register } = useContext(UserContext)

  const handleOnChange = (e) => {
    setRegistro({ ...registro, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const minCaracteres = 6

    const { email, clave, confirmarClave } = registro
    if (!email.trim() || !clave.trim() || !confirmarClave.trim()) {
      toast.warning('Por favor llena todos los campos')
      return
    }

    if (clave.length < minCaracteres) {
      toast.info('La contraseña debe tener al menos 6 caracteres')
      return
    }

    if (clave !== confirmarClave) {
      toast.error('Las contraseñas no coinciden')
      return
    }
    await register(email, clave)
  }

  return (
    <main>
      <section className='contenedor-registro'>
        <form onSubmit={handleSubmit} className='formulario-registro'>
          <h1 className='titulo-registro'>Registrate</h1>
          <div>
            <label htmlFor='email' className='form-label'>Email</label>
            <input
              type='email'
              name='email'
              value={registro.email}
              onChange={handleOnChange}
              className='form-control input-registro'
              placeholder='Ingresa tu email'
            />
          </div>
          <div>
            <label htmlFor='clave' className='form-label'>Contraseña</label>
            <input
              type='password'
              name='clave'
              value={registro.clave}
              onChange={handleOnChange}
              className='form-control input-registro'
              placeholder='Ingresa tu contraseña'
            />
          </div>
          <div>
            <label htmlFor='confirmarClave' className='form-label'>Confirmar Contraseña</label>
            <input
              type='password'
              name='confirmarClave'
              value={registro.confirmarClave}
              onChange={handleOnChange}
              className='form-control input-registro'
              placeholder='Confirma tu contraseña'
            />
          </div>
          <button type='submit' className='btn btn-info button-registro'>Crear cuenta</button>
        </form>
      </section>
    </main>
  )
}
export default Register
