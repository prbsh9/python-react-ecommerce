// ProductCard.js
import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { id, title, price, imageLink } = product;

  return (
    <div className="product-card">
      <img src={imageLink} alt={title} className="product-image" />
      <h3 className="product-title">
        <Link to={`/products/${id}`} className="">
          {title}
        </Link>{" "}
      </h3>
      <p className="product-price">{price}</p>
      <button className="add-to-cart-button">Add to Cart</button>
    </div>
  );
};

export default ProductCard;
