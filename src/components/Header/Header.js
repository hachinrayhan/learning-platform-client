import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
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
                    <Nav>
                        <Link>User Photo</Link>
                        <Link>Login</Link>
                        <Link>Dark Mode</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;