import { BrowserRouter, Navigate, NavLink, Route, Routes } from "react-router-dom"
import logo from '../logo.svg';
import { UsersPage, ProductosPage, AboutPage } from "../01-lazyload/pages";

export const Navigation = () => {
  return (
    <BrowserRouter>
        <div className="main-layout">
            <nav>
                <img src={logo} alt="react logo" />
                <ul>
                  <li> 
                    <NavLink to='/productos' 
                             className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Productos</NavLink> 
                  </li>
                  <li> 
                    <NavLink to='/about'
                             className={ ({ isActive }) => isActive ? 'nav-active' : '' }>About</NavLink> 
                  </li>
                  <li> 
                    <NavLink to='/users'
                             className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Users</NavLink> 
                  </li>
                </ul>
            </nav>
            <Routes>
              <Route path="about" element={<AboutPage />} />
              <Route path="users" element={<UsersPage />} />
              <Route path="productos" element={<ProductosPage />} />
              <Route path="/*" element={<Navigate to="/productos" replace /> } />
            </Routes>
        </div>
    </BrowserRouter>
  )
}
