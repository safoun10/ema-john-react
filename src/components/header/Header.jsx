import React, { useContext } from "react";
import("./Header.css");
import logo from "../../images/Logo.svg";
import { Link } from "react-router-dom";
import AuthProvider, { AuthContext } from "../provider/AuthProvider";

const Header = () => {

  const {user , logOut} = useContext(AuthContext);

  const handleLogOut = () => {
    logOut();
  }


  return (
    <div className="header">
      <img src={logo} alt="logo" />
      <div>
        <Link to="/">Shop</Link>
        <Link to="/review">Order Review</Link>
        <Link to="/inventory">Manage Inventory</Link>
        <Link to="/login">Login</Link>
        <Link to="/sign-up">Sign Up</Link>
      </div>
      {user && <> <span className="user-email">{user.email}</span> <button className="log-out-user" onClick={handleLogOut}>Log Out</button> </>}
    </div>
  );
};

export default Header;
