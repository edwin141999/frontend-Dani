import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import './login.css'

function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm()
  let navigate = useNavigate()

  const onSubmit = data => {
    console.log('EMAIL: ' + data.email)
    console.log('PASSWORD: ' + data.password)
    navigate('/register', { replace: true })
  }

  const onNavigateRegister = () => {
    navigate('/register', { replace: true })
  }

  const onNavigateRecover = () => {
    navigate('/recover', { replace: true })
  }

  return (
    <div className='mx-1 bg-secondary bg-opacity-50 rounded-4'>
      <div className='container py-5 px-5'>
        <div className='text-center'>
          <h1>Inicio de Sesion</h1>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} >
          <div className='col-md container'>
            <label>Correo</label>
            <input
              type="text"
              name="email"
              placeholder='Ingrese su correo'
              className='form-control mb-3'
              {...register("email", { required: true })}
            />
            {errors.email && <span className='text-white text-bg-danger'>El correo es requerido</span>}
          </div>
          <div className='col-md container'>
            <label>Contraseña</label>
            <input
              type="password"
              name="password"
              placeholder='Ingrese su contraseña'
              className='form-control mb-3'
              {...register("password", { required: true })}
            />
            {errors.password && <span className='text-white text-bg-danger'>La contraseña es requerida</span>}
          </div>
          <div className='d-grid gap-2 col-11 mx-auto pt-2'>
            <input type="submit" className='btn btn-primary' value="Iniciar Sesion" />
          </div>
        </form>
        <div className='container pt-4 text-center'>
          <div>
            <p>¿Olvidaste tu contraseña?
              <span className='text-primary fw-bold pointer' onClick={onNavigateRecover}>Recuperar contraseña</span>
            </p>
          </div>
          <div className='pt-2'>
            <p>¿Todavia no tienes una cuenta?
              <span className='text-primary fw-bold pointer' onClick={onNavigateRegister}>Registrate</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login