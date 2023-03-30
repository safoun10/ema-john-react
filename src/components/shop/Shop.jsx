import { faArrowRight, faArrowRightArrowLeft, faDrum, faDumpster, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { addToDb, getShoppingCart } from "../../utilities/fakedb";
import Cart from "../cart/Cart";
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

  useEffect( () => {
    const storedCart = getShoppingCart();
    console.log(storedCart);
  } ,[])

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
    addToDb(product.id);
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
          <Cart cart={cart}></Cart>
        <div className="btn-s">
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

export default Shop;
