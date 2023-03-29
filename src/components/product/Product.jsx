import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import ("./Product.css");

const Product = (props) => {
    const {img , name , price , ratings , seller , quantity} = props.product;

    const addToCart = props.addToCart;


    return (
        <div className='product'>
            <img className='product-image' src={img} alt="product image missing" />
            <div className='product-info'>
                <div className='product-name'>{name}</div>
                <div className='product-price'>Price : $ {price}</div>
                <div className='product-price'>Price : &#2547; {price * 105}</div>
                <div className='product-seller'>Manufacturer : {seller}</div>
                <div className='product-rating'>Rating : {ratings} stars</div>
            </div>
            <button onClick={ () => addToCart(props.product)} className='cart-btn'>
                Add to cart <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;