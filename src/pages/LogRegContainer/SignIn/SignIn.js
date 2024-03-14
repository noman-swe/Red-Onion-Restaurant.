import React, { useRef } from 'react';
import logoImg from '../../../images/logo2.png';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';


const SignIn = () => {

    const emailRef = useRef('');
    const passwordRef = useRef('');

    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();

    const handleFormSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        // console.log("Login: ", email, password);

        signInWithEmailAndPassword(email, password);
    }

    const location = useLocation();
    let from = location?.state?.from.pathname || '/';

    if (user) {
        navigate(from, { replace: true });
    }


    return (
        <div>
            <div className='w-100 d-flex flex-column justify-content-center align-items-center banner-background-img' style={{ backgroundImage: 'url("https://i.ibb.co/HqzCSt2/bannerbackground.png")', backgroundPosition: 'center center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', height: '90vh' }}>

                <div className="w-25 text-center">
                    <img src={logoImg} className='w-50 mb-5' alt="" />
                </div>
                <div className="w-25">
                    <Form onSubmit={handleFormSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control ref={emailRef} className='py-2' type="email" placeholder="Enter Email" autoComplete='on' />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control ref={passwordRef} className='py-2' type="password" placeholder="Password" autoComplete='on' />
                        </Form.Group>

                        <Button className='w-100 py-2 border-0' type="submit" style={{ backgroundColor: "#F91944" }}> Sign In </Button>
                        <p className='text-center mt-2'>New to Red-Onion? <Link to={'/register'} className='text-decoration-none'>Register</Link></p>
                    </Form>
                </div>
            </div>
        </div >
    );
};

export default SignIn;