
import React from 'react'
import './Footer.css';
import Mapa from './mapa/Mapa';
import Sociales from './sociales/Sociales';

export const Footer = () => {
  return (
    <footer>
        <Sociales />
        <Mapa />
    </footer>
  )
}
