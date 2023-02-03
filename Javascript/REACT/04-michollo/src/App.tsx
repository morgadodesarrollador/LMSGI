import React from 'react';
import logo from './logo.svg';
import './App.css';
import { HomePage } from './pages/Home/Home';
import { Outlet, Route, Routes } from 'react-router-dom';
import { SearchPage } from './pages/Search/Search';
import { NavBar } from './pages/NavBar';
import { ServiciosPage } from './pages/Servicios/Servicios';
import { Main } from './pages/Main/Main';
import { Redes } from './pages/Servicios/redes/Redes';
import { Web } from './pages/Servicios/web/web';
import { TrabajosPage } from './pages/Trabajos/Trabajos';

function App() {
  return (
    <>
      <header>
        <h2>Mi Chollo.com</h2>
        <NavBar />
      </header>
      <main>
        {/* <Outlet /> */}
      
        <Routes>
          <Route path='/' element = {<Main />} >
          
            <Route path='mistrabajos' element = { <TrabajosPage />} />
            <Route path='servicios' element = { <ServiciosPage />} />
              {/* <Route path='redes' element = { <Redes />} />
              <Route path='web' element = { <Web />} />
            </Route> */}
          </Route>
        </Routes>
      </main>

   
      
    </>
  );
}

export default App;
