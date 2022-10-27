import React from 'react';
import { Button, Card, Container, ListGroup } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';

const CheckOut = () => {
    const course = useLoaderData();
    const { name, creator, image, price } = course;
    return (
        <Container className='my-5'>
            <Card style={{ width: '18rem' }} className='mx-auto'>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{name} by <Link>{creator}</Link></Card.Title>
                    <p className='fs-2 fw-bold'>Price: ${price}</p>
                </Card.Body>
                <Card.Footer>
                    <Button>Checkout</Button>
                </Card.Footer>
            </Card>
        </Container>
    );
};

export default CheckOut;