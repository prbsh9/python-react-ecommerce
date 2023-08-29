// Header.js
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
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
