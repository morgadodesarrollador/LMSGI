
import { NavLink } from 'react-router-dom';

import './NavBar.css';
const NavBar = () => {
  return (
    <>
        <nav>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/formacion'>Formación</NavLink>
            <NavLink to='/services'>Servicios</NavLink>
            <NavLink to='/works'>Trabajos</NavLink>
            <NavLink to='/contact'>Contacto</NavLink>
        </nav>

    </>
  )
}

export default NavBar
