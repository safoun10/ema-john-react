import {
  faArrowRight,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { addToDb, deleteShoppingCart, getShoppingCart } from "../../utilities/fakedb";
import Cart from "../cart/Cart";
import Product from "../product/Product";
import { Link } from "react-router-dom";
import("./Shop.css");

const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const onlineAPI =
      "https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json";

    const localJson = "products.json";

    fetch(onlineAPI)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    const storedCart = getShoppingCart();
    const savedCart = [];
    for (const id in storedCart) {
      const quantity = storedCart[id];
      const addedProduct = products.find((product) => product.id === id);
      if (addedProduct) {
        addedProduct.quantity = quantity;
        savedCart.push(addedProduct);
      }
    }
    setCart(savedCart);
  }, [products]);

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
    addToDb(product.id);
  };

  const handleClearCart = () => {
    setCart([]);
    deleteShoppingCart();
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
          <button className="btn-clear" onClick={handleClearCart}>
            Clear Cart <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
          </button>
          <button className="btn-review">
            <Link to="/review">
              Review Order <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Shop;
