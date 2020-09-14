import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import data from '../Data/data.json';
import Product from '../Product/Product';
import './Course.css';

const Course = () => {
    const courseData = data;
    const [products, setProduct] = useState(courseData);
    const [cart, setCart] =useState([]);

    const handleAddProduct = (product) =>{
        const newCart = [...cart, product];
        setCart(newCart);
    }

    return (
        <div>
            <div className="course-container">
                <div className="product-container">
                    <h2 className="course-heading">Our Course's</h2>
                   {
                    products.map(allProductInfo => <Product 
                        handleAddProduct = {handleAddProduct}
                        product={allProductInfo}>
                        </Product>)
                   }
                </div>
                <div className="cart-container">
                   <Cart cart={cart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Course;