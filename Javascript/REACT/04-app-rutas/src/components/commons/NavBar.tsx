
import React from 'react'
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import Formacion from '../secciones/formacion/Formacion';
import Servicios from '../secciones/servicios/Servicios';
import './NavBar.css';
const NavBar = () => {
  return (
    <BrowserRouter>
        <nav>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/formacion'>Formación</NavLink>
            <NavLink to='/services'>Servicios</NavLink>
            <NavLink to='/works'>Trabajos</NavLink>
            <NavLink to='/contact'>Contacto</NavLink>
        </nav>
        <Routes>
              <Route path='/' element={<h2>Pagina Principal</h2>} />
              <Route path='formacion' element={<Formacion />} />
              <Route path='services' element={<Servicios />} />
              <Route path='contact' element={<h2>Sección de Contactos</h2>} />
              <Route path='works' element={<h2>Sección de Trabajos</h2>} />
          </Routes>
    </BrowserRouter>
  )
}

export default NavBar
