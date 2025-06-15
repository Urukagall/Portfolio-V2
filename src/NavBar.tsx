import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import {Nav, NavDropdown} from 'react-bootstrap';

function NavBar() {
    const [count, setCount] = useState(0)

    return (
        <>
            <Navbar expand="lg" className="NavBarHomePage" fixed="top" >
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto text-color">
                            <Nav.Link href="#Home">Accueil</Nav.Link>
                            <Nav.Link href="#about">A Propos</Nav.Link>
                            <Nav.Link href="#competences">Compétences</Nav.Link>
                            <Nav.Link href="#projet">Projet</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default NavBar
