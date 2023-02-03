import React from 'react'
import { Outlet } from 'react-router-dom'

export const Main = () => {
  return (
    <section>
 
      <hr/>
      <Outlet />
      
    </section>
  )
}
