import React from 'react'

function Password() {
  return (
    <div className='row mx-1 text-center'>
      <h1>Recuperar contraseña</h1>
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

export default Password