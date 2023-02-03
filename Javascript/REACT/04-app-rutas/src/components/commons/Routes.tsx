import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';

import React from 'react'
import Formacion from '../../pages/formacion/Formacion';
import Servicios from '../../pages/servicios/Servicios';

const Rutas = () => {
  return (
    <BrowserRouter>
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

export default Rutas
