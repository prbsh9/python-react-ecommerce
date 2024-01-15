// ProductDetail.js
import React from "react";
import { useParams } from "react-router-dom";

const ProductDetail = ({ productsData }) => {
  const { id } = useParams();

  const product = productsData.find((product) => product._id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="product-detail">
      <div className="product-image-container">
        <img
          className="product-image-main"
          src={product.imageLink}
          alt={product.name}
        />
      </div>
      <div className="product-info">
        <h2 className="product-name">{product.name}</h2>
        <p className="product-price">{product.price}</p>
        <p className="product-description">{product.description}</p>
        <p className="product-reviews">{product.reviews} Reviews</p>
        <button className="add-to-cart-button">Add to Cart</button>
        <button className="buy-now-button">Buy Now</button>
      </div>
    </div>
  );
};

export default ProductDetail;
