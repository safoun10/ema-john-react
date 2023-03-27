import React, { useEffect, useState } from 'react';
import ("./Shop.css")

const Shop = () => {
    const [products , setProducts] = useState([]);

    useEffect( () => {
        fetch("https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json")
        .then(res => res.json())
        .then(data => setProducts(data))
    } , []);

    console.log(products.length)

    return (
        <div className='shop-container'>
            <div className='products-container'>
                <div>Products coming here = {products.length}!!!!</div>
            </div>
            <div className='cart-container'>
                <div>Order summary !!!</div>
            </div>
        </div>
    );
};

export default Shop;