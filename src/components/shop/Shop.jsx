import React, { useEffect, useState } from "react";
import Product from "../product/Product";
import("./Shop.css");

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const addToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
    console.log(product);
    console.log(newCart);
  };

  return (
    <div className="shop-container">
      <div className="products-container">
        {products.map((product) => (
          <Product key={product.id} product={product} addToCart={addToCart}></Product>
        ))}
      </div>
      <div className="cart-container">
        <div>Order summary !!!</div> 
      </div>
    </div>
  );
};

export default Shop;