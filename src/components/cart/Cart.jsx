import React from 'react';
import ("./Cart.css");

const Cart = ({cart}) => {
    console.log(cart);

    let total = 0;
    let totalShipping = 0;
    for(const product of cart){
        total = total + product.price;
        totalShipping = totalShipping + product.shipping;
    }
    const tax = total * 7 /100;
    const gradTotal = total + totalShipping + tax;
    return (
        <div>
            <div className="calculative-data">
                <div>Selected items : {cart.length}</div>
                <div>Total Price : ${total}</div>
                <div>Total Shipping Charge : ${totalShipping}</div>
                <div>Tax(7%) : ${tax}</div>
            </div>
            <div className="grand-total">Grand Total : ${gradTotal}</div>
        </div>
    );
};

export default Cart;