// ProductCard.js
import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { _id, name, price, imageLink } = product;

  return (
    <div className="product-card">
      <img src={imageLink} alt={name} className="product-image" />
      <h3 className="product-name">
        <Link to={`/products/${_id}`} className="">
          {name}
        </Link>{" "}
      </h3>
      <p className="product-price">{price}</p>
      <button className="add-to-cart-button">Add to Cart</button>
    </div>
  );
};

export default ProductCard;
