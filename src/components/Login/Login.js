import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React from 'react';
import { useContext } from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { TbMail } from 'react-icons/tb'
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const Login = () => {
    const { googleProviderLogin, githubProviderLogin } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const navigate = useNavigate();

    const googleLogin = () => {
        googleProviderLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success('Congrats! Login Successful');
                navigate('/');
            })
            .catch(error => {
                console.error(error);
            })
    }

    const githubLogin = () => {
        githubProviderLogin(githubProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success('Congrats! Login Successful');
                navigate('/');
            })
            .catch(error => {
                console.error(error);
            })
    }

    return (
        <div>
            <ButtonGroup vertical className='container mt-5 w-50'>
                <h2 className='mb-3'>Please Login to Get Premium Access</h2>
                <Button onClick={googleLogin} variant='outline-primary' className='mb-3 fs-1 fw-bold'><FaGoogle /> Login with Google</Button>
                <Button onClick={githubLogin} variant='outline-dark' className='mb-3 fs-1 fw-bold'><FaGithub /> Login with Github</Button>
                <Link to={'/email-login'} className='w-100'><Button variant='outline-success' className='mb-3 fs-1 fw-bold'><TbMail /> Login with Email</Button></Link>
                <p>Don't have an account? <Link to={'/signup'}>Sign up</Link></p>
            </ButtonGroup>
        </div>
    );
};

export default Login;