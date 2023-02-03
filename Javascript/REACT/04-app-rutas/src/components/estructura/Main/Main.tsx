import React from 'react'
import { Outlet } from 'react-router-dom';
import NavBar from '../../commons/NavBar';
import Rutas from '../../commons/Routes';
import './Main.css';


export const Main = () => {
  return (
    <main>
        <Outlet />
    </main>
  )
}
