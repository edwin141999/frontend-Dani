import React from 'react'
import { useNavigate } from 'react-router-dom'
import './login.css'

function Register() {
  let navigate = useNavigate()
  const onNavigateLogin = () => {
    navigate('/login', { replace: true })
  }

  return (
    <div className='mx-1 bg-secondary bg-opacity-50 rounded-4'>
      <div className='py-5 px-5'>
        <div className='text-center px-5'>
          <h1>Registrate</h1>
        </div>
        <form>
          <div >
            <span>Nombre</span>
            <input
              type="email"
              className='form-control mb-3'
              placeholder='Introduzca su nombre' />
          </div>
          <div>
            <span>Correo</span>
            <input
              type="email"
              className='form-control mb-3'
              placeholder='Introduzca un correo' />
          </div>
          <div>
            <span>Contraseña</span>
            <input
              type="email"
              className='form-control mb-3'
              placeholder='Introduzca una contraseña' />
          </div>
          <div className='d-grid gap-2 mx-auto pt-2'>
            <input type="button" value="Registrarse" className='btn btn-primary' />
          </div>
        </form>
        <div className='container text-center pt-4'>
          <p>¿Ya tienes una cuenta? <span className='text-primary fw-bold pointer' onClick={onNavigateLogin}>Inicia Sesion</span> </p>
        </div>
      </div>
    </div>
  )
}

export default Register