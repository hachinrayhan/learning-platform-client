import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import photo1 from '../../images/photo1.png';
import photo2 from '../../images/photo2.png';
import photo3 from '../../images/photo3.png';

const Home = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={photo1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Welcome to Test Prep</h3>
                    <p>Go to Courses choose the course you need</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={photo2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Welcome to Test Prep</h3>
                    <p>Signup and Create your new account</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={photo3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Welcome to Test Prep</h3>
                    <p>
                        Login your account and get premium access
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Home;