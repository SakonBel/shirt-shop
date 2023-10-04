import React from "react";
import "./Navbar.style.scss";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="logo-container">
        <h1>Logo</h1>
      </div>
      <div className="main-nav">
        <ul>
          <li>Home</li>
          <li>Products</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="sub-nav">
        <ul>
          <li>Search</li>
          <li>Account</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
