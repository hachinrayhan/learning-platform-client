import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const SignUp = () => {
    const [message, setMessage] = useState('');
    const { createUser, updateUserProfile, setLoading } = useContext(AuthContext);

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photoURL = form.photourl.value;
        const profile = { displayName: name, photoURL: photoURL }
        const email = form.email.value;
        const password = form.password.value;
        setMessage('');

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                updateUserProfile(profile)
                    .then(() => { console.log('updated user') })
                    .catch(error => {
                        setMessage(error.message);
                    })
                setMessage('Congrats! Signup Successful');
                form.reset();
            })
            .catch(error => {
                console.error(error);
                setMessage(error.message);
            })
            .finally(() => {
                setLoading(false);
            })
    }

    return (
        <Form onSubmit={handleSubmit} className='container w-50 text-start mt-5 bg-success border rounded-2 p-4 fw-bold'>
            <h2>Sign up and start learning</h2>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Full Name</Form.Label>
                <Form.Control name='name' type="text" placeholder="Enter Your Full Name" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicURL">
                <Form.Label>Photo URL</Form.Label>
                <Form.Control name='photourl' type="text" placeholder="Enter Your Photo URL" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name='email' type="email" placeholder="Enter email" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name='password' type="password" placeholder="Password" required />
            </Form.Group>
            <Form.Text className="text-muted">
                <p className='text-warning'>{message}</p>
            </Form.Text>
            {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check
                    type="checkbox"
                    onClick={handleAccepted}
                    label={<>Accept <Link to={'/terms&conditions'}>Terms & Conditions</Link></>} />
            </Form.Group> */}
            <Button variant="primary" type="submit">
                Submit
            </Button>
            <p>Already have an account? <Link to={'/login'}>Log in</Link></p>
        </Form>
    );
};

export default SignUp;