import React, { useState, useEffect } from 'react';
import {Container, Row, Col} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Course from '../../Course/Course';
import data from '../../fakeData/data.json'
import Cart from '../Cart/Cart';

const CourseContainer = () => {
    const [courses, setCourses] = useState([]);
    const [puschasedCourses, setPuschasedCourses] = useState([]);

    useEffect(() => {
        setCourses(data);
    },[]);

    const addToCourseCart = (courses) => {
        const updatedPurchasedItems = [...puschasedCourses, courses];
        setPuschasedCourses(updatedPurchasedItems);
    }

    return (
        <div>
            <Container>
                <Row className="mt-3">
                    <Col md={8} className="d-flex flex-wrap">
                        {
                            courses.map(course => <Course clickHandler={addToCourseCart} data={course} key={course.id}></Course>)
                        }
                    </Col>
                    <Col md={4}>
                        <Cart data={puschasedCourses} />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default CourseContainer;