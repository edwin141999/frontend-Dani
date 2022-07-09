import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm()
  let navigate = useNavigate()

  const onSubmit = data => {
    console.log('EMAIL: ' + data.email)
    console.log('PASSWORD: ' + data.password)
    navigate('/register', { replace: true })
  }

  return (
    <div className='row mx-1 text-center'>
      <h1>Inicio de Sesion</h1>
      <form onSubmit={handleSubmit(onSubmit)} >
        <div className='col-md-7 container text-center'>
          <label>Correo</label>
          <input
            type="text"
            name="email"
            placeholder='Ingrese su correo'
            className='form-control mb-2'
            {...register("email", { required: true })}
          />
          {errors.email && <span className='text-danger'>The email is required</span>}
        </div>
        <div className='col-md-7 container text-center'>
          <label>Contraseña</label>
          <input
            type="password"
            name="password"
            placeholder='Ingrese su contraseña'
            className='form-control mb-2'
            {...register("password", { required: true })}
          />
          {errors.password && <span className='text-danger'>The password is required</span>}
        </div>
        <div className='d-grid gap-2 col-4 mx-auto pt-4'>
          <input type="submit" className='btn btn-primary' value="Login" />
        </div>
      </form>
    </div>
  )
}

export default Login