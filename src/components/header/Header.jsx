import React from "react";
import("./Header.css");
import logo from "../../images/Logo.svg";

const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="logo" />
      <div>
        <a href="/">Shop</a>
        <a href="/review">Order Review</a>
        <a href="/inventory">Manage Inventory</a>
        <a href="/login">Login</a>
      </div>
    </div>
  );
};

export default Header;
