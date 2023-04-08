import { faArrowRight, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Cart from "../cart/Cart";
import "./Orders.css"
import ReviewItem from "../reviewItem/ReviewItem";

const Orders = () => {
    const products = useLoaderData();
    const [cart , setCart] = useState(products);

    const handleRemoveItem = (id) => {
        const remaining = cart.filter(product => product.id !== id);
        setCart(remaining);
    }


    return (
        <div className="order-container">
            <div className="product-item">
                {cart.map(product => <ReviewItem
                    key={product.id}
                    product = {product}
                    handleRemoveItem = {handleRemoveItem}
                ></ReviewItem>)}
            </div>

            <div className="order-cart-container">
                <div className="order-cart-header">Order Summary</div>
                <Cart cart={cart}></Cart>
                <div className="order-btn-s">
                    <button className="btn-clear">
                        Clear Cart <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                    </button>
                    <button className="btn-review">
                        Review Order <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                    </button>
                </div>
            </div>

        </div>
    );
};

export default Orders;
