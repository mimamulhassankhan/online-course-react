import React from 'react';
import {Card, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Course = (props) => {
    console.log(props.clickHandler);
    const {course_name, couse_image, author, domain_name, price, description} = props.data;
    console.log(props.data);

    return (
        <div >
            <Card className="m-3 shadow" style={{ width: '20rem' }}>
                <Card.Img height="200px" variant="top" src={couse_image} />
                <Card.Body>
                    <Card.Title>{course_name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{author}</Card.Subtitle>
                    <h4 className="text-info">$ {price}</h4>
                    <Card.Text>{description}</Card.Text>
                    <Button onClick={() => props.clickHandler(props.data)} variant="danger">Enroll Now</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Course;