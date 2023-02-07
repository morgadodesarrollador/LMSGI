import React from 'react'
import { Link } from 'react-router-dom'
import './nav.css';
export const NavBar = () => {
  return (
    <nav>
        <Link to='/'>Home</Link>
        <Link to='servicios'>Sersvicios</Link>
        <Link to='formacion'>Formacion</Link>
        <Link to='qsomos'>Quienes Somos</Link>
        <Link to='contacto'>Contacto</Link>
    </nav>
  )
}
