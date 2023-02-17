import React from 'react'
import { Link } from 'react-router-dom'

export const NavBar = () => {
  return (
    <nav className="submenu">
        <Link to='oracle' > Administrador Oracle</Link>
        <Link to='fibra'>Fusionador de Fibra </Link>
        <Link to='cisco'>SysAdmin Cisco </Link>
    </nav>
  )
}
