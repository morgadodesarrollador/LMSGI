import React from 'react'
import { Outlet } from 'react-router-dom'
import { NavBar } from './NavBar'
import './Servicios.css';

export const ServiciosPage = () => {
  return (
    <>
        <div id="servicios">
            <NavBar />
            <div>ServiciosPage</div>
        </div>
        <Outlet />
    </>
    
    
  )
}
