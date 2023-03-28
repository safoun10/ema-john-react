import React from 'react';
import ("./Product.css");

const Product = (props) => {
    console.log(props.product);
    const {img , name , price , ratings , seller , quantity} = props.product
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
            <button className='cart-btn'>Add to cart</button>
        </div>
    );
};

export default Product;