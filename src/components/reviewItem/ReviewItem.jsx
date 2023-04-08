import React from 'react';
import './ReviewItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const ReviewItem = ({ product , handleRemoveItem }) => {
    console.log(product);
    return (
        <div className='item'>
            <div className='img-box'>
                <img className='product-img' src={product.img} />
            </div>
            <div className='info'>
                <div>
                    <div>{product.name}</div>
                    <div>Price : ${product.price}</div>
                    <div>Shipping Charge : ${product.shipping}</div>
                </div>
                <div onClick={() => handleRemoveItem(product.id)} className='icon-box'>
                    <FontAwesomeIcon className='fa-icon' icon={faTrash}></FontAwesomeIcon>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;