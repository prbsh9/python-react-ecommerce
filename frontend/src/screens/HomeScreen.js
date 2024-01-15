// Product.js
import React, { useState } from "react";
import ProductCard from "../components/ProductCard"; // Create a ProductCard component

const HomeScreen = ({ productsData }) => {
  const productsPerPage = 6; // Number of products to display per page
  const [currentPage, setCurrentPage] = useState(1);
  const lastProductIndex = currentPage * productsPerPage;
  const firstProductIndex = lastProductIndex - productsPerPage;
  const currentProducts = productsData.slice(
    firstProductIndex,
    lastProductIndex
  );

  const totalPages = Math.ceil(productsData.length / productsPerPage);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div className="products">
      <h2>Products</h2>
      <div className="product-list">
        {currentProducts.map((product, key) => (
          <ProductCard key={key} product={product} />
        ))}
      </div>
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            className={`page-button ${
              currentPage === index + 1 ? "active" : ""
            }`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default HomeScreen;
