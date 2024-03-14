import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo2.png';

const NotFound = () => {
    return (
        <div>
            <div className='w-100 d-flex flex-column justify-content-center align-items-center banner-background-img' style={{ backgroundImage: 'url("https://i.ibb.co/HqzCSt2/bannerbackground.png")', backgroundPosition: 'center center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', height: '70vh' }}>
                <h2>404 Not Found.</h2>
                <div className="mt-3 d-flex">

                    <div className=''>
                        <Link to={'/'} className='me-4 text-decoration-none text-black'>
                            {/* <img height={35} src={logo} alt="" /> */}
                            Home
                        </Link>
                    </div>

                    <div>
                        <Link className='mx-auto text-decoration-none me-4 text-black' to={'/login'}>Login </Link>
                    </div>

                    <div className='sign-up-link px-4 '>
                        <Link className='text-white mx-auto text-decoration-none' to={'/register'}>Signup</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFound;