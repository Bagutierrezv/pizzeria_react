import { useState } from 'react'
import { Toaster, toast } from 'sonner'
import './RegisterPage.css'

const RegisterPage = () => {
  const [registro, setRegistro] = useState({
    email: '',
    clave: '',
    confirmarClave: ''
  })

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
    toast.success('Registro exitoso')
  }

  return (
    <main>
      <section className='contenedor'>
        <Toaster position='top-center' expand={false} richColors />
        <form onSubmit={handleSubmit} className='formulario'>
          <h1 className='titulo'>Registrate</h1>
          <div>
            <label htmlFor='email' className='form-label'>Email</label>
            <input
              type='email'
              name='email'
              value={registro.email}
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
              value={registro.clave}
              onChange={handleOnChange}
              className='form-control'
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
              className='form-control'
              placeholder='Confirma tu contraseña'
            />
          </div>
          <button type='submit' className='btn btn-info '>Crear cuenta</button>
        </form>
      </section>
    </main>
  )
}
export default RegisterPage
