import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './NavBar'

const Servicios = () => {
  return (
    <>
      <h2>Servicios Ofrecidos</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis officiis modi dolores placeat rem optio perspiciatis, delectus molestias fugit deserunt pariatur dolor quae hic provident voluptatem commodi. Soluta, quam vel!</p>
      <hr />
      <NavBar />
      <hr />
      <Outlet />
    </>
  )
}

export default Servicios
