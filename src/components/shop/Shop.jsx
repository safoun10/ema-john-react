import React, { useEffect, useState } from "react";
import Product from "../product/Product";
import("./Shop.css");

const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json"
    )
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
    console.log(product);
    console.log(cart);
    console.log(newCart);
  };

  return (
    <div className="shop-container">
      <div className="products-container">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            addToCart={addToCart}
          ></Product>
        ))}
      </div>

      <div className="cart-container">
        <div className="cart-header">Order Summary</div>

        <div className="calculative-data">
          <div>Selected items : {cart.length}</div>
          <div>Total Price : ${cart.length}</div>
          <div>Total Shipping Charge : ${cart.length}</div>
          <div>Tax : ${cart.length}</div>
        </div>

        <div className="grand-total">Grand Total : ${cart.length}</div>

        <div className="btn-s">
          <button className="btn-clear">Clear Cart</button>
          <button className="btn-review">Review Order</button>
        </div>
      </div>
    </div>
  );
};

export default Shop;
