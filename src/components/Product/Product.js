import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';

const Product = (props) => {
    // console.log(props);
    const { title, about, image, price } = props.product;
    return (
        <div className="product">
            <div>
                <img src={image} alt="" />
            </div>
            <div className="product-content">
                <h2 className='product-title'>{title}</h2>
                <p className='product-about'>{about}</p>
                <h4 className='product-price'>Price: <span>${price}</span></h4>
                <button 
                className="enroll-btn" 
                onClick={() => props.handleAddProduct(props.product)}
                >
                    <FontAwesomeIcon icon={faShoppingCart} />Enroll Course
                </button>
            </div>

        </div>
    );
};

export default Product;