import React from 'react'
import ReactDOM  from 'react-dom/client'
import {Header} from './Header'
import './estilos.css'
import CouterApp from './CouterApp'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Header 
                title1= "Soy Batman" 
                subtitle="Personaje con capa" 
                edad = { 50 }  
        />
        <CouterApp 
                valor= { 100 } 
        />
    </React.StrictMode>
)
