import React from 'react'
import { ListGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const NavBar = () => {
  return (
   
    <nav className="submenu">
        <Link to='dweb' > Diseño Web</Link>
        {/* <Link to='seguridad'>Seguridad Informática</Link> */}
        {/* <Link to='mantenimiento'>Mantenimiento de Equipos</Link> */}
        <Link to='cloud'>Automatización en Cloud</Link>
    </nav>
  )
}
