import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../../images/logo2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import './Header.css';

const Header = () => {

    return (
        <div className='header'>
            <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary header-navbar">
                <Container>
                    <Navbar.Brand href="#home">
                        <img height={35} src={logo} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">

                        </Nav>
                        <Nav className='nav-links-container'>
                            <Nav.Link href="#cart" >
                                <FontAwesomeIcon icon={faCartShopping} />
                            </Nav.Link>
                            <Nav.Link href="#login">Login</Nav.Link>

                            <Nav.Link href="#signup" className='sign-up px-4 text-white'>
                                Signup
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;