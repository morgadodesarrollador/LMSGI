import React from 'react'
import { Link } from 'react-router-dom'
import './nav.css';
export const NavBar = () => {
  return (
    <nav>
        <Link to='home'>Home</Link>
        <Link to='servicios'>Servicios</Link>
        <Link to='formacion'>Formacion</Link>
        <Link to='ordenadores'>Ordenadores</Link>
        
        <Link to='qsomos'>Quienes Somos</Link>
        <Link to='contacto'>Contacto</Link>
    </nav>
  )
}
