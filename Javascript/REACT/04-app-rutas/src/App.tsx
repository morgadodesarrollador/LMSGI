import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Route, Routes } from 'react-router-dom';
import { Layout } from './pages/Layout';
import Formacion from './pages/formacion/Formacion';
import Servicios from './pages/servicios/Servicios';
import { WebPage } from './pages/servicios/Web';
import { RedesPage } from './pages/servicios/Redes';

function App() {
  return (
    <>
      <Routes>
          <Route path='/' element={<Layout />} >
              <Route path='formacion' element={<Formacion />} />
              <Route path='/services' element={<Servicios />} >
                <Route path='redes' element={<RedesPage />} />
                <Route path='web' element={<WebPage />} /> 
              </Route>
              <Route path='contact' element={<h2>Sección de Contactos</h2>} />
              <Route path='works' element={<h2>Sección de Trabajos</h2>} />
          </Route>
      </Routes>
      
    </>
    
  );
}

export default App;
