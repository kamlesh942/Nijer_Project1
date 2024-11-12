// src/components/HomePage.js
import React, { useState } from 'react';
import './HomePage.css';
import ProductCard from '../Productgrid/productgrid';
import FirstPage from './FirstPage';

const HomePage = () => {
  const [location, setLocation] = useState("All India");
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    // Implement search functionality here
    alert(`Searching for "${searchQuery}" in "${location}"`);
  };
  const products = [
    {
      id: 1,
      image: "https://via.placeholder.com/150",
      name: "NO. 303 Crackle due Drop Blouse",
      location: "Surat, Gujarat",
      price: 299
    },
    {
      id: 2,
      image: "https://via.placeholder.com/150",
      name: "Stylish Men's Jacket",
      location: "Mumbai, Maharashtra",
      price: 999
    },
    {
      id: 3,
      image: "https://via.placeholder.com/150",
      name: "Elegant Women's Dress",
      location: "Delhi, India",
      price: 599
    },
    {
      id: 3,
      image: "https://via.placeholder.com/150",
      name: "Elegant Women's Dress",
      location: "Delhi, India",
      price: 599
    },
    {
      id: 3,
      image: "https://via.placeholder.com/150",
      name: "Elegant Women's Dress",
      location: "Delhi, India",
      price: 599
    },
    {
      id: 3,
      image: "https://via.placeholder.com/150",
      name: "Elegant Women's Dress",
      location: "Delhi, India",
      price: 599
    },
    {
      id: 3,
      image: "https://via.placeholder.com/150",
      name: "Elegant Women's Dress",
      location: "Delhi, India",
      price: 599
    },
  ];
  return (
    <div>
      {/* Search Container */}
      <div className="search-container">
        <h2>Search for products & find verified sellers near you</h2>
        <div className="search-box">
          <button className="icon-button">
            <span role="img" aria-label="location">&#x1F4CD;</span> {location}
          </button>
          <input
            type="text"
            className="search-input"
            placeholder="Search Product here"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="icon-button">
            <span role="img" aria-label="microphone">&#x1F3A4;</span>
          </button>
          <button className="icon-button search-btn" onClick={handleSearch}>
            <span role="img" aria-label="search">&#x1F50D;</span>
          </button>
        </div>
      </div>
        <div className="product-card-section"><FirstPage/></div>
      <div className="product-card-section">
      {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
