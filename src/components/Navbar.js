import React from 'react'
import { NavLink } from 'react-router-dom'
import './navbar.css'

function Navbar() {
  return (
    <div>
      <ul>
        <li>
          <NavLink className="nav" to='/login'>Iniciar Sesion</NavLink>
        </li>
        <li>
          <NavLink className="nav" to='/register'>Registrarse</NavLink>
        </li>
        <li>
          <NavLink className="nav" to='/recover'>Recuperar contraseña</NavLink>
        </li>
      </ul>
    </div>);
}

export default Navbar