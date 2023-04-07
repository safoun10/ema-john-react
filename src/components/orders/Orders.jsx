import { faArrowRight, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useLoaderData } from "react-router-dom";
import Cart from "../cart/Cart";
import "./Orders.css"
import ReviewItem from "../reviewItem/ReviewItem";

const Orders = () => {
    const products = useLoaderData();
    return (
        <div className="order-container">
            <div className="product-item">
                {products.map(product => <ReviewItem
                    key={product.id}
                    product = {product}
                ></ReviewItem>)}
            </div>

            <div className="order-cart-container">
                <div className="order-cart-header">Order Summary</div>
                <Cart cart={products}></Cart>
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
