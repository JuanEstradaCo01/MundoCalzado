import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import Logo from "../imgs/Logo.png"
import { Link } from "react-router-dom"



function NavBar() {
    return (


        <nav>
            <ul className="NavBar">
                <Link to="/"><img className="LogoNav" src={Logo} alt="Logo" /></Link>

                <h1 className="NavTitulo">MUNDO CALZADO</h1>

                <li className="NavLi">
                    <Link to="/">Home</Link>
                </li>

                <li className="NavLi">
                    <Link to="/category/Tenis">Tenis</Link>
                </li>

                <li className="NavLi">
                    <Link to="/item">Detalle</Link>
                </li>

                <Link to="#" className="carrito">
                    <FontAwesomeIcon icon={faCartShopping}/>
                </Link>
            </ul>
        </nav>


        //(Bootstrap)
        /*<div >
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a href="#"><img className="logo" src={Logo} alt="logo" /></a>
                    <a className="navbar-brand" href="#">Mundo calzado</a>
                    
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Buscar</button>
                        </form>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav  mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a to="#" className="nav-link active" aria-current="page">Home</a>
                            </li>
                            <li className="nav-item">
                                <a to="#" className="nav-link active" aria-current="page">Masculino</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Femenino</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Categorias
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Casuales</a></li>
                                    <li><a className="dropdown-item" href="#">Deportivo</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="/detalle">Detalles</a></li>
                                </ul>
                               
                            </li>
                        </ul>
                        <a className="carrito" href="#">
                            <FontAwesomeIcon icon={faCartShopping}/>
                        </a>
                    </div>
                </div>
            </nav>
        </div>*/

    )
}

export default NavBar;