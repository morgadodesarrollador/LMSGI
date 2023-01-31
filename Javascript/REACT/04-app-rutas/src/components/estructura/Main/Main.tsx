import React from 'react'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import './Main.css';


export const Main = () => {
  return (
    <main>
        <Outlet />
    </main>
  )
}
