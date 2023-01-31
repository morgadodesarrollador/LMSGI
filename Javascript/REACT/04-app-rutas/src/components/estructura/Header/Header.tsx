import React from 'react'
import NavBar from '../../commons/NavBar';
import './Header.css';
import logo from '../../../../src/logo.svg';


const Header = () => {
  return (
    <header>
        <figure>
            <img src={logo} alt="logo react" />
        </figure>
        <NavBar/>
    </header>
  )
}

export default Header
