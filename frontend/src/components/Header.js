// Header.js
import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const checkLoggedIn = () => {
    if (localStorage.getItem("access_token")) {
      setLoggedIn(true);
    }
  };

  return (
    <header className="header">
      <div className="logo">
        <Link to="/" className="link">
          AnimeTreasure
        </Link>
      </div>
      <div className="search-bar">
        <input
          type="text"
          className="search-input"
          placeholder="Search for products"
        />
        <button className="search-button">Search</button>
      </div>
      <div className="user-actions">
        <button className="cart-button">Cart</button>

        <button className="login-button">
          <Link to="/login" className="link">
            Login
          </Link>
        </button>
      </div>
    </header>
  );
};

export default Header;
