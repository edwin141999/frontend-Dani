import React from 'react'

function Register() {
  return (
    <div className='row mx-1 text-center'>
      <h1>Registrate</h1>
      <form>
        <div className='col-md-7 container text-center'>
          <span>Correo</span>
          <input type="email" className='form-control mb-2' placeholder='Introduzca un correo' />
        </div>
        <div className='col-md-7 container text-center'>
          <span>Contraseña</span>
          <input type="email" className='form-control mb-2' placeholder='Introduzca un correo' />
        </div>
        <div className='col-md-7 container text-center'>
          <span>Confirmar contraseña</span>
          <input type="email" className='form-control mb-2' placeholder='Introduzca un correo' />
        </div>
        <div className='d-grid gap-2 col-4 mx-auto pt-4'>
          <input type="button" value="Registrarse" className='btn btn-primary' />
        </div>
      </form>
    </div>
  )
}

export default Register