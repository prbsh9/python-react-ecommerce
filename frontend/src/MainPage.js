import React from "react";
import "./MainPage.css"; // You can create this CSS file for styling

const MainPage = () => {
  return (
    <div className="main-page">
      <header className="header">
        <div className="logo">Logo</div>
        <div className="search-bar">Search Bar</div>
        <div className="cart-login">Cart | Login</div>
      </header>
      <main className="product-list">
        <h1>Latest Products</h1>
        <div className="product-cards">
          {/* Map through your products and generate cards */}
          <div className="product-card">
            <img src="naruto-image.jpg" alt="Naruto Figure" />
            <h2>Naruto Figure</h2>
            <p>Reviews: 5 stars</p>
            <p>Price: $29.99 USD</p>
          </div>
          {/* Repeat similar structure for other product cards */}
        </div>
      </main>
    </div>
  );
};

export default MainPage;
