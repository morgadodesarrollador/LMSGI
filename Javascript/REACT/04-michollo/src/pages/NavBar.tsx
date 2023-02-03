import React from 'react'
import { Link } from 'react-router-dom'

export const NavBar = () => {
  return (
    <nav>
        <Link to='/'>Home</Link>
        {/* <Link to='search'>Search</Link> */}
        <Link to='servicios'>Servicios</Link>
        <Link to='mistrabajos'>Trabajos</Link>
        {/* trabajos, contacto, qsomos */}
    </nav>
  )
}
