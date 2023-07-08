import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
// Hoja de Estilos
import "./Navbar.css";
// Iconos
import { GiRocketThruster } from "react-icons/gi";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";

function Navbar() {
    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container container">
                    <Link to="/" className="navbar-logo"  onClick={closeMobileMenu}>
                        <GiRocketThruster className="navbar-icon" onClick={closeMobileMenu} />
                        Auditora Gibel
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        {click ? <FaTimes /> : <FaBars />}
                    </div>
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        {/* :::: SECCION INICIO ::::: */}
                        <li className="nav-item">
                            <NavLink 
                                to="/" 
                                className={({ isActive }) => "nav-links" + (isActive ? " activated" : "")} onClick={handleClick}>
                                Inicio
                            </NavLink>
                        </li>
                        {/* :::: SECCION NOSOTROS ::::: */}
                        <li className="nav-item">
                            <NavLink 
                                to="/nosotros" 
                                className={({ isActive }) => "nav-links" + (isActive ? " activated" : "")} onClick={handleClick}>
                                Nosotros
                            </NavLink>
                        </li>
                        {/* :::: SECCION CONTACTO ::::: */}
                        <li className="nav-item">
                            <NavLink 
                                to="/contacto" 
                                className={({ isActive }) => "nav-links" + (isActive ? " activated" : "")} onClick={handleClick}>
                                Contacto
                            </NavLink>
                        </li>
                        {/* :::: SECCION REGISTRO ::::: */}
                        <li className="nav-item">
                            <NavLink 
                                to="/registro" 
                                className={({ isActive }) => "nav-links" + (isActive ? " activated" : "")} onClick={handleClick}>
                                Registro
                            </NavLink>
                        </li>
                        {/* :::: SECCION INICIO DE SESION ::::: */}
                        <li className="nav-item">
                            <NavLink 
                                to="/InicioSesion" 
                                className={({ isActive }) => "nav-links" + (isActive ? " activated" : "")} onClick={handleClick}>
                                Inicio de Sesión
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar