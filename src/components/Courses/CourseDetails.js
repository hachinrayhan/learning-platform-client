import React from 'react';
import { FaDownload } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Container } from 'react-bootstrap';

const CourseDetails = () => {
    const course = useLoaderData();
    const { id, name, creator, image, learnings } = course;
    return (
        <Container className='my-5'>
            <h1>{course.name} <Button><FaDownload></FaDownload></Button></h1>
            <Card className='w-75 mx-auto'>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{name} by <Link>{creator}</Link></Card.Title>
                    <Card.Text className='fs-3 fw-bold'>
                        What you'll learn from this course:
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    {
                        learnings.map((learning, index) => <ListGroup.Item key={index}>{learning}</ListGroup.Item>)
                    }
                </ListGroup>
                <Card.Footer>
                    <Link to={`/checkout/${id}`}><Button>Get Premium Access</Button></Link>
                </Card.Footer>
            </Card>
        </Container>
    );
};

export default CourseDetails;