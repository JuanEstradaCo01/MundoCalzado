import React, { useContext } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom"
import { cartContext } from "../../context/cartContext"
import "../item/item.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../../imgs/logo.png"
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar() {
    const { cart } = useContext(cartContext)
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <div className="divLogo">
                        <Navbar.Brand href="/"><Link to="/"><img className="LogoNav" src={logo} alt="Logo" /></Link></Navbar.Brand>
                        <h3>Mundo calzado</h3>
                    </div>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">

                            <div className="containerLinksA">
                                <Nav.Link><Link to="/"><FontAwesomeIcon icon={faHouse} className="iconMain" /></Link></Nav.Link>

                                <NavDropdown title="Categorias" id="navbarScrollingDropdown">
                                    <NavDropdown.Item><Link to="/category/Deportivo">Deportivo</Link></NavDropdown.Item>

                                    <NavDropdown.Item><Link to="/category/Casual">Casual</Link></NavDropdown.Item>

                                    <NavDropdown.Item><Link to="/category/Calzado para montaña">Montaña</Link></NavDropdown.Item>
                                </NavDropdown>

                                <Nav.Link><Link to="/carrito">
                                    <FontAwesomeIcon icon={faCartShopping} className="carrito" /><span>{cart.length}</span>
                                </Link></Nav.Link>
                            </div>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default NavBar;