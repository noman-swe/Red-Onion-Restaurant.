import React from 'react';
import { Button, Form } from 'react-bootstrap';
import logoImg from '../../../images/logo2.png';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';

const SignUp = () => {

    const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, errorOfUpdate] = useUpdateProfile(auth);
    const navigate = useNavigate();

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const conPassword = e.target.conPassword.value;
        console.log("details: ", <br />, name, email, password, conPassword);

        if (password !== conPassword) {
            return `Hi Mr. ${name}, you got a error`;
        }
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
    }

    if (user) {
        navigate('/home');
    }

    return (
        <div>
            <div className='w-100 d-flex flex-column justify-content-center align-items-center banner-background-img' style={{ backgroundImage: 'url("https://i.ibb.co/HqzCSt2/bannerbackground.png")', backgroundPosition: 'center center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', height: '90vh' }}>

                <div className="w-25 text-center">
                    <img src={logoImg} className='w-50 mb-5' alt="" />
                </div>
                <div className="w-25">
                    <Form onSubmit={handleFormSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Control name='name' className='py-2' type="text" placeholder="Name" autoComplete='on' />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control name='email' className='py-2' type="email" placeholder="Enter Email" autoComplete='on' />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control name='password' className='py-2' type="password" placeholder="Password" autoComplete='on' />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control name='conPassword' className='py-2' type="password" placeholder="Re-Password" autoComplete='on' />
                        </Form.Group>

                        <Button className='w-100 py-2 border-0' type="submit" style={{ backgroundColor: "#F91944" }}> Sign Up </Button>
                        <p className='text-center mt-2'>Alreadly have an account? <Link to={'/login'} className='text-decoration-none'>Login</Link></p>
                    </Form>
                </div>
            </div>
        </div >
    );
};

export default SignUp;