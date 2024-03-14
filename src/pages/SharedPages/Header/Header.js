import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../../images/logo2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import './Header.css';
import { Link } from 'react-router-dom';
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Header = () => {
    const [user, loading, error] = useAuthState(auth);
    const [signOut, signOutLoading, signOutError] = useSignOut(auth);

    const notify = () => toast("Your are logged Out.");

    const handleSignOut = () => {
        signOut();
        notify();
    }

    return (
        <div className='header'>
            <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary header-navbar ">
                <Container>
                    <Navbar.Brand>
                        <Link to={'/'}>
                            <img height={35} src={logo} alt="" />
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">

                        </Nav>
                        <Nav className='nav-links-container d-flex align-items-center'>
                            <Link to={'/cart'}>
                                <FontAwesomeIcon icon={faCartShopping} />
                            </Link>
                            <span className='mx-3'>
                                {
                                    !user &&
                                    <Link className='mx-auto text-decoration-none' to={'/login'}>Login </Link>
                                }
                            </span>

                            <span className='sign-up-link ms-2 px-4 py-1'>
                                {
                                    user ?
                                        <div onClick={handleSignOut} className='text-white logout-btn mx-auto text-decoration-none'>Logout</div>
                                        : <Link className='text-white  mx-auto text-decoration-none' to={'/register'}>Signup</Link>
                                }
                            </span>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;