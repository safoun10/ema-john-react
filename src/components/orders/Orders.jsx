import { faArrowRight, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Cart from "../cart/Cart";
import "./Orders.css"
import ReviewItem from "../reviewItem/ReviewItem";
import { deleteShoppingCart, removeFromDb } from "../../utilities/fakedb";

const Orders = () => {
    const products = useLoaderData();
    const [cart, setCart] = useState(products);

    const handleRemoveItem = (id) => {
        const remaining = cart.filter(product => product.id !== id);
        setCart(remaining);
        removeFromDb(id);
    }

    const handleClearCart = () => {
        setCart([]);
        deleteShoppingCart();
    }


    return (
        <div className="order-container">
            <div className="product-item">
                {cart.map(product => <ReviewItem
                    key={product.id}
                    product={product}
                    handleRemoveItem={handleRemoveItem}
                ></ReviewItem>)}
            </div>

            <div className="order-cart-container">
                <div className="order-cart-header">Order Summary</div>
                <Cart cart={cart}></Cart>
                <div className="order-btn-s">
                    <button onClick={handleClearCart} className="btn-clear">
                        Clear Cart <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                    </button>
                    <button className="btn-review">
                        <Link to="/checkout">
                            Proceed Checkout <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                        </Link>
                    </button>
                </div>
            </div>

        </div>
    );
};

export default Orders;
