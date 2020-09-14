import React from 'react';
import './Cart.css';
const Cart = (props) => {
    const cart = props.cart;
    const enrollCoursesPrice = cart.reduce((total, course) => + total + course.price, 0);

    let shipping = 0;
    if(enrollCoursesPrice === 0){
        shipping = 0;
    }
    else if(enrollCoursesPrice < 100)
    {
        shipping = 10;
    }
    else{
        shipping = 8;
    }
    return (
        <div className="cart-content">
            <h2 className="cart-heading">Enroll Summary</h2>
            <p>Enroll Courses: <span>{cart.length}</span></p>
            <p>Courses Price: <span>{enrollCoursesPrice}$</span></p>
            <p>Shipping Cost: <span>{shipping}$</span></p>
            <h4>Total Price: <span>{enrollCoursesPrice + shipping}$</span></h4>
            <button className="place-ordered-btn">Place Ordered</button>
            
        </div>
    );
};

export default Cart;