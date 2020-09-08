import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

const Cart = (props) => {

    const courses = props.data;

    const totalPrice = courses.reduce((totalPrice, course) => totalPrice + course.price, 0);

    const cartStyle = {
        position : 'sticky',
        top:'0',
        textAlign : 'left'
    }

    return (
        <div style={cartStyle}>
            <h3>Order Summery</h3>
            <h4>Items Ordered : {courses.length}</h4>
            <h4 className="text-danger">Total Price: $ {totalPrice.toFixed(2)}</h4>
            <br/>
            <Button variant="success">Review Order</Button>
        </div>
    );
};

export default Cart;