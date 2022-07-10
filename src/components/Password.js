import React from 'react'

function Password() {
  return (
    <div className='mx-1 bg-secondary bg-opacity-50 rounded-4'>
      <div className='px-5 py-5'>
        <h1>Recuperar contraseña</h1>
        <form>
          <div>
            <span>Nueva contraseña</span>
            <input
              type="password"
              placeholder='Introduzca nueva contraseña'
              className='form-control mb-2'
            />
          </div>
          <div className='d-grid gap-2 mx-auto pt-4'>
            <input type="button" className='btn btn-primary' value="Guardar" />
          </div>
        </form>
      </div>
    </div>
  )
}

export default Password