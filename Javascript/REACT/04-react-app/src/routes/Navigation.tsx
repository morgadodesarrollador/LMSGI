import { BrowserRouter, Navigate, NavLink, Route, Routes } from "react-router-dom"
import logo from '../logo.svg';
import { Rutas } from './routes';


export const Navigation = () => {
  return (
    <BrowserRouter>
        <div className="main-layout">
            <nav>
                <img src={logo} alt="react logo" />
                <ul>
                  {
                    // Rutas.map ( (ruta) => (
                    Rutas.map ( ( {to, name }) => (
                      <li key={ name }>
                        <NavLink  to={ to }
                                  className={ ({ isActive }) => isActive ? 'nav-active' : '' }> 
                            { name } 
                        </NavLink> 
                      </li>  

                    ))
                  }
                </ul>
            </nav>
            <Routes>
              {
                Rutas.map( ( { to, path, Component }) => (
                  <Route key={ to }
                      path= { path } 
                      element={ <Component />} 
                  /> 
                ))
              }
              <Route path="/*" element={<Navigate to={ Rutas[0].to} replace /> } />
            </Routes>
        </div>
    </BrowserRouter>
  )
}
