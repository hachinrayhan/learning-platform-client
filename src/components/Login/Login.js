import { GoogleAuthProvider } from 'firebase/auth';
import React from 'react';
import { useContext } from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { TbMail } from 'react-icons/tb'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const Login = () => {
    const { googleProviderLogin } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const googleLogin = () => {
        googleProviderLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                console.error(error);
            })
    }
    return (
        <div>
            <ButtonGroup vertical className='container mt-5 w-50'>
                <h2 className='mb-3'>Log in to your account</h2>
                <Button onClick={googleLogin} variant='outline-primary' className='mb-3 fs-1 fw-bold'><FaGoogle /> Login with Google</Button>
                <Button variant='outline-dark' className='mb-3 fs-1 fw-bold'><FaGithub /> Login with Github</Button>
                <Link to={'/email-login'} className='w-100'><Button variant='outline-success' className='mb-3 fs-1 fw-bold'><TbMail /> Login with Email</Button></Link>
                <p>Don't have an account? <Link to={'/signup'}>Sign up</Link></p>
            </ButtonGroup>
        </div>
    );
};

export default Login;