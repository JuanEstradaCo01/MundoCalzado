import React, { useContext } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faUser } from "@fortawesome/free-solid-svg-icons"
import Logo from "../imgs/Logo.png"
import { Link } from "react-router-dom"
import { cartContext } from "../../context/cartContext"
import "../item/item.css"



function NavBar() {
    const { cart } = useContext(cartContext)
    return (


        <nav>
            <ul className="NavBar">
                <Link to="/"><img className="LogoNav" src={Logo} alt="Logo" /></Link>

                <h1 className="NavTitulo">MUNDO CALZADO</h1>

                <Link to="/form" className="user">
                    <FontAwesomeIcon icon={faUser} />
                </Link>

                <li  className="NavLi">
                    <Link to="/">Home</Link>
                </li>

                <li  className="NavLi">
                    <Link to="/category/Deportivo">Deportivos</Link>
                </li>

                <li  className="NavLi">
                    <Link to="/category/Casual">Casual</Link>
                </li>

                <li  className="NavLi">
                    <Link to="/category/Calzado para montaña">Montaña</Link>
                </li>

                <Link to="/carrito"  className="carrito">
                    <FontAwesomeIcon icon={faCartShopping}/><span>{cart.length}</span>
                </Link>
            </ul>
        </nav>

/*
        //(Bootstrap)
        <div >
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link to="/"><img className="LogoNav" src={Logo} alt="Logo" /></Link>

                    <h1 className="NavTitulo">MUNDO CALZADO</h1>

                    <Link to="/form" className="user">
                    <FontAwesomeIcon icon={faUser} />
                    </Link>
                    
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
                                <Link to="/" className="nav-link active" aria-current="page">Home</Link>
                                <li className="NavLi">
                            </li>
                            </li>
                            <li className="nav-item">
                                <link to="/category/Deportivo" className="nav-link active" aria-current="page">Deportivos</link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" href="/item">Detalle</Link>
                            </li>

                            <Link to="#" className="carrito">
                                <FontAwesomeIcon icon={faCartShopping}/>
                            </Link>

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