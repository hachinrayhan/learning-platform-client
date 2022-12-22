import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import photo1 from '../../images/photo1.png';
import photo2 from '../../images/photo2.png';
import photo3 from '../../images/photo3.png';
import './Home.css';

const Home = () => {
    return (
        <Carousel className='container'>
            <Carousel.Item className='position-relative'>
                <img
                    className="d-block w-100"
                    src={photo1}
                    alt="First slide"
                />
                <Carousel.Caption className='carousel-caption position-absolute top-0 start-0 position-relative'>
                    <div className='position-absolute top-50 start-50 translate-middle'>
                        <h3>Welcome to Test Prep</h3>
                        <p>Go to Courses and choose the course you need</p>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className='position-relative'>
                <img
                    className="d-block w-100"
                    src={photo2}
                    alt="Second slide"
                />

                <Carousel.Caption className='carousel-caption position-absolute top-0 start-0 position-relative'>
                    <div className='position-absolute top-50 start-50 translate-middle'>
                        <h3>Welcome to Test Prep</h3>
                        <p>Signup and Create your new account</p>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className='position-relative'>
                <img
                    className="d-block w-100"
                    src={photo3}
                    alt="Third slide"
                />

                <Carousel.Caption className='carousel-caption position-absolute top-0 start-0 position-relative'>
                    <div className='position-absolute top-50 start-50 translate-middle'>
                        <h3>Welcome to Test Prep</h3>
                        <p>Login your account and get premium access</p>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Home;