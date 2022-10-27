import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link, useLoaderData } from 'react-router-dom';
import CourseCard from './CourseCard';
import './Courses.css';

const Courses = () => {
    const courses = useLoaderData();
    return (
        <Container className='my-5'>
            <Row>
                <Col xs={12} md={4}>
                    <div className='course-name text-start'>
                        <h2>All the courses</h2>
                        {
                            courses.map(course => <Link key={course.id} to={`/courses/${course.id}`}><h5>{course.name}</h5></Link>)
                        }
                    </div>
                </Col>
                <Col xs={12} md={8}>
                    <Row xs={1} md={2} className="g-4">
                        {
                            courses.map(course => <CourseCard key={course.id} course={course}></CourseCard>)
                        }
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default Courses;