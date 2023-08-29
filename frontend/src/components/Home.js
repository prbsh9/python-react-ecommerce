// Product.js
import React, { useState } from "react";
import ProductCard from "./ProductCard"; // Create a ProductCard component
const productsData = [
  // Array of product data
  {
    id: 1,
    title: "Naruto Figure",
    price: "$29.99",
    imageLink:
      "https://media.sketchfab.com/models/93174ca7b0bb4f2d8ddf00021854f2cb/thumbnails/ad762fd30c89458bba7ca4a8a67e3032/515eb1f466794bd186244eea8157e1d7.jpeg",
  },
  {
    id: 2,
    title: "One Piece Figure",
    price: "$34.99",
    imageLink:
      "https://m.media-amazon.com/images/I/61t9FPsDkOL._AC_SL1002_.jpg",
  },
  {
    id: 3,
    title: "Dragon Ball Figure",
    price: "$39.99",
    imageLink: "https://m.media-amazon.com/images/I/41tMO+4FY7L._AC_.jpg",
  },
  {
    id: 4,
    title: "Demon Slayer Figure",
    price: "$44.99",
    imageLink:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEDkJl-4dh6MhB4e23taPkuSxBb688xdG2c5ET-oLPLw&s",
  },
  {
    id: 5,
    title: "My Hero Academia Figure",
    price: "$49.99",
    imageLink:
      "https://images.goodsmile.info/cgm/images/product/20230213/13959/111463/large/400c3ebd5acebf21fb84602159bf5ebc.jpg",
  },
  {
    id: 6,
    title: "Attack on Titan Figure",
    price: "$54.99",
    imageLink:
      "https://www.sideshow.com/cdn-cgi/image/width=300,quality=80,f=auto/https://www.sideshow.com/storage/product-images/9121902/eren-mikasa-armin-deluxe-bonus-version_attack-on-titan_silo_md.png",
  },
  {
    id: 7,
    title: "Sword Art Online Figure",
    price: "$59.99",
    imageLink: "https://static-de.gamestop.de/images/products/286710/3max.jpg",
  },
  {
    id: 8,
    title: "Roronoa zoro Figure",
    price: "$64.99",
    imageLink: "https://m.media-amazon.com/images/I/71zTLwUcm4L.jpg",
  },
];
const Home = () => {
  const productsPerPage = 4; // Number of products to display per page
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
        {currentProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
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

export default Home;
