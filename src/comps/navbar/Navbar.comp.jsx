import React from "react";
import "./Navbar.style.scss";
import { AppBar, Container } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <Container>
        <div className="navbar">
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
              <li>
                <SearchIcon className="icon" />
              </li>
              <li>
                <PersonIcon className="icon" />
              </li>
              <li>
                <ShoppingCartIcon className="icon" />
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
