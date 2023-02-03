
import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../components/commons/NavBar'
import Header from '../components/estructura/Header/Header'
import { Main } from '../components/estructura/Main/Main'

export const Layout = () => {
  return (
    <>
        <Header />
        <Main />
    </>
  )
}
