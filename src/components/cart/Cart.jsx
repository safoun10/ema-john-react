import React from 'react';
import ("./Cart.css");

const Cart = ({cart}) => {
    // console.log(cart);

    let total = 0;
    for(const product of cart){
        total = total + product.price;
    }
    console.log(total);
    return (
        <div>
            <div className="calculative-data">
                <div>Selected items : {cart.length}</div>
                <div>Total Price : ${total}</div>
                <div>Total Shipping Charge : ${cart.length}</div>
                <div>Tax : ${cart.length}</div>
            </div>
            <div className="grand-total">Grand Total : ${cart.length}</div>
        </div>
    );
};

export default Cart;