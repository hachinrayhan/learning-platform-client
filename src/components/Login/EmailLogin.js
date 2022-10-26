import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';


const EmailLogin = () => {
    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
    }
    return (
        <Form onSubmit={handleSubmit} className='container w-50 text-start mt-5 bg-success border rounded-2 p-4 fw-bold'>
            <h2>Login with your email and password</h2>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name='email' type="email" placeholder="Enter email" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name='password' type="password" placeholder="Password" required />
            </Form.Group>
            <Form.Text className="text-muted">
                {/* <p className='text-danger'>{error}</p> */}
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
            <p>Don't have an account? <Link to={'/signup'}>Sign up</Link></p>
        </Form>
    );
};

export default EmailLogin;