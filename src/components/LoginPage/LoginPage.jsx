import { useState } from 'react'
import { Toaster, toast } from 'sonner'
import './LoginPage.css'

const LoginPage = () => {
  const [inicioSesion, setInicioSesion] = useState({
    email: '',
    clave: ''
  })

  const handleOnChange = (e) => {
    setInicioSesion({ ...inicioSesion, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const minCaracteres = 6

    const { email, clave } = inicioSesion
    if (!email.trim() || !clave.trim()) {
      toast.warning('Por favor llena todos los campos')
      return
    }

    if (clave.length < minCaracteres) {
      toast.info('La contraseña debe tener al menos 6 caracteres')
      return
    }

    toast.success('Inicio de sesión exitoso')
  }

  return (
    <main>
      <section className='contenedor'>
        <Toaster position='top-center' expand={false} richColors />
        <form onSubmit={handleSubmit} className='formulario'>
          <h1 className='titulo'>Iniciar Sesión</h1>
          <div>
            <label htmlFor='email' className='form-label'>Email</label>
            <input
              type='email'
              name='email'
              value={inicioSesion.email}
              onChange={handleOnChange}
              className='form-control'
              placeholder='Ingresa tu email'
            />
          </div>
          <div>
            <label htmlFor='clave' className='form-label'>Contraseña</label>
            <input
              type='password'
              name='clave'
              value={inicioSesion.clave}
              onChange={handleOnChange}
              className='form-control'
              placeholder='Ingresa tu contraseña'
            />
          </div>
          <button type='submit' className='btn btn-info '>Iniciar Sesión</button>
        </form>
      </section>
    </main>
  )
}
export default LoginPage
