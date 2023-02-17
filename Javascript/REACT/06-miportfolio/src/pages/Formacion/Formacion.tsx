import React from 'react'
import { Outlet } from 'react-router-dom'
import { NavBar } from './NavBar'

export const FormacionPage = () => {
  return (
    <>
        <section className='home'>
          <h2>Seccion Formación</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur culpa non obcaecati itaque officia ex repudiandae tempore eaque ullam ut similique magni quisquam facere at, ratione amet voluptates quas quia.</p> 
        </section>
        <NavBar />
        <section className='body'>
          <Outlet />
        </section>
    </>
  )
}
