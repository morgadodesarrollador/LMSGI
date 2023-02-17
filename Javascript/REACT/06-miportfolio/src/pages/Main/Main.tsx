import React from 'react'
import { Outlet } from 'react-router-dom';
import './main.css';
export const Main = () => {
  return (
    <main>
        <Outlet />
    </main>
  )
}
