import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
import './recover.css'

function Recover() {

  const [isLoading, setIsLoading] = useState(false);
  const [isChanged, setIsChanged] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm()
  let navigate = useNavigate()

  const onSubmit = data => {
    console.log(data);
    console.log(isLoading);
    setIsLoading(true);
    console.log(isLoading);
  }

  useEffect(() => {
    setIsLoading(false);
    setIsChanged(false);
  }, [])

  const onChangeDiv = () => {
    console.log(isChanged);
    setIsChanged(true);
  }

  const onNavigateRegister = () => {
    navigate('/register', { replace: true })
  }

  const onNavigateLogin = () => {
    navigate('/login', { replace: true })
  }

  return (
    <div className='mx-1 bg-secondary bg-opacity-50 rounded-4 align-items-center'>
      <div className='container py-5 px-5'>
        <h1 className='text-center'>Recuperar contraseña</h1>
        {
          !isChanged ?
            <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                <span>Email</span>
                <input
                  type="text"
                  className='form-control mb-2'
                  placeholder='Introduzca su email'
                />
              </div>
              <div className='d-grid gap-2 mx-auto pt-4'>
                <input type="button" className='btn btn-primary' value="Siguiente" onClick={onChangeDiv} />
              </div>
            </form> :
            <div className='row justify-content-center'>
              <div className='bg-light bg-opacity-50 rounded-4 px-2 py-2 text-center reduce'>
                <span>Revisa tu bandeja de entrada para conocer los proximos pasos. Si no recibe un correo electronico y no esta en su carpeta de correo no deseado, esto podria significar que se registro con una direccion diferente.
                </span>
              </div>
            </div>
        }
        <div className='pt-4 text-center'>
          <div>
            <p className='fs-6'>
              <span className='text-primary fw-bold pointer' onClick={onNavigateLogin}>Iniciar sesión </span>
              o
              <span className='text-primary fw-bold pointer' onClick={onNavigateRegister}> Registrarse</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Recover