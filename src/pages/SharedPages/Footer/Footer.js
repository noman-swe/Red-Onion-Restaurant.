import React from 'react';
import { Card, Container, Nav, Navbar } from 'react-bootstrap';
import footerLogo from '../../../images/logo.png';
import './Footer.css';

const Footer = () => {
    const date = new Date();
    let year = date.getFullYear();

    return (
        <footer>
            <Card className='bg-deep-dark'>
                <div className="container py-4 mt-3">
                    <div className="row">
                        <div className="col-md-7">
                            <Navbar.Brand >
                                <img src={footerLogo} alt="" height={35} />
                            </Navbar.Brand>
                        </div>
                        <div className="col-md-5 d-flex">
                            <Card.Body className='footer-items'>
                                <Nav.Link >About Online food</Nav.Link>
                                <Nav.Link >Read our blog</Nav.Link>
                                <Nav.Link >Sign up to deliver</Nav.Link>
                                <Nav.Link >Add your restaurant</Nav.Link>
                            </Card.Body>

                            <Card.Body className='footer-items'>
                                <Nav.Link>Get help</Nav.Link>
                                <Nav.Link>Read FAQs</Nav.Link>
                                <Nav.Link>View all Cities</Nav.Link>
                                <Nav.Link>Restaurants near me</Nav.Link>
                            </Card.Body>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12">
                            <Navbar collapseOnSelect expand="lg" className="bg-deep-dark">
                                <Container>
                                    <p className='copyright-text'>Copyright © {year} Online food</p>
                                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                                    <Navbar.Collapse id="responsive-navbar-nav">
                                        <Nav className="me-auto">


                                        </Nav>
                                        <Nav className='footer-nav me-5'>
                                            <Nav.Link>Privacy Policy</Nav.Link>
                                            <Nav.Link>Terms of Use</Nav.Link>
                                            <Nav.Link>Priicing</Nav.Link>
                                        </Nav>
                                    </Navbar.Collapse>
                                </Container>
                            </Navbar>
                        </div>
                    </div>

                </div>
            </Card>
        </footer>
    );
};

export default Footer;