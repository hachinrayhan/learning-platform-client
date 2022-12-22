import React, { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaUser } from 'react-icons/fa';
import { MdDarkMode, MdOutlineLightMode } from 'react-icons/md';

import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    const { user, logout } = useContext(AuthContext);
    const [dark, setDark] = useState(false);

    const toggle = () => {
        setDark(!dark);
    }

    useEffect(() => {
        if (dark) {
            document.body.className = 'dark';
        }
        else {
            document.body.className = 'light';
        }
    }, [dark])

    const logoutUser = () => {
        logout()
            .then(() => { })
            .catch(error => console.log(error))
    }

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/" className='d-flex align-items-center'>
                    <img
                        alt=""
                        src={logo}
                        height="50"
                        className="d-inline-block align-top me-2"
                    />{' '}
                    <span>Test Prep</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="m-auto nav-item">
                        <Link to={'/courses'}>Courses</Link>
                        <Link to={'/faq'}>FAQ</Link>
                        <Link to={'/blog'}>Blog</Link>
                    </Nav>
                    <Nav className='d-flex align-items-center nav-item'>
                        {
                            user?.uid ?
                                <div>
                                    <Link data-toggle="tooltip" data-placement="top" title={user.displayName}>
                                        {
                                            user?.photoURL ?
                                                <Image src={user.photoURL} roundedCircle style={{ height: '35px' }}></Image>
                                                :
                                                <FaUser></FaUser>
                                        }
                                    </Link>
                                    <button onClick={logoutUser} className='mx-3 btn btn-primary btn-sm'>
                                        Logout
                                    </button>
                                </div>
                                :
                                <div>
                                    <Link to={'/login'}>Login</Link>
                                </div>
                        }
                        <button onClick={toggle} class="btn btn-light btn-sm mt-auto">{dark ? <MdOutlineLightMode className='fs-5' /> : <MdDarkMode className='fs-5' />}</button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;