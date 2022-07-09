import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

function Recoverpassword() {

  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm()

  const onSubmit = data => {
    console.log(data);
    console.log(isLoading);
    setIsLoading(true);
    console.log(isLoading);
  }

  useEffect(() => {
    setIsLoading(false);
  }, [])


  return (
    <div className='row mx-1 text-center'>
      <h1>Recuperar contraseña</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='col-md-5 container text-center'>
          <span>Email</span>
          <input
            type="text"
            className='form-control mb-2'
            placeholder='Introduzca su email'
          />
        </div>
        <div className='d-grid gap-2 col-4 mx-auto pt-4'>
          <input type="button" className='btn btn-primary' value="Siguiente" />
        </div>
      </form>
      <form>
        <div className='col-md-5 container text-center'>
          <span>Nueva contraseña</span>
          <input
            type="password"
            placeholder='Introduzca nueva contraseña'
            className='form-control mb-2'
          />
        </div>
        <div className='d-grid gap-2 col-4 mx-auto pt-4'>
          <input type="button" className='btn btn-primary' value="Guardar" />
        </div>
      </form>
    </div>
  )
}

export default Recoverpassword