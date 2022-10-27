import React from 'react';
import { Button, Col, ListGroup } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const CourseCard = ({ course }) => {
    const { id, name, total_hours, lectures, price, image } = course;
    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>Total Hours: {total_hours}</ListGroup.Item>
                        <ListGroup.Item>Number of Lectures: {lectures}</ListGroup.Item>
                        <ListGroup.Item>Price: ${price}</ListGroup.Item>
                    </ListGroup>
                </Card.Body>
                <Card.Footer>
                    <Link to={`/courses/${id}`}><Button className='w-full' variant="primary">Details</Button></Link>
                </Card.Footer>
            </Card>
        </Col>
    );
};

export default CourseCard;