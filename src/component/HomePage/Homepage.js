// src/components/HomePage.js
import React, { useState, useEffect } from "react";
import "./HomePage.css";
import ProductCard from "../Productgrid/productgrid";
import FirstPage from "./FirstPage";
import axios from "axios";

const HomePage = () => {
  //setLocation
  const [location] = useState("All India");
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    // Implement search functionality here
    alert(`Searching for "${searchQuery}" in "${location}"`);
  };
  /* const products = [
    {
      id: 1,
      avatar: "https://via.placeholder.com/150",
      name: "NO. 303 Crackle due Drop Blouse",
      place: "Surat, Gujarat",
      price: 299,
    },
    {
      id: 2,
      avatar: "https://via.placeholder.com/150",
      name: "Stylish Men's Jacket",
      place: "Mumbai, Maharashtra",
      price: 999,
    },
    {
      id: 3,
      avatar: "https://via.placeholder.com/150",
      name: "Elegant Women's Dress",
      place: "Delhi, India",
      price: 599,
    },
    {
      id: 3,
      avatar: "https://via.placeholder.com/150",
      name: "Elegant Women's Dress",
      place: "Delhi, India",
      price: 599,
    },
    {
      id: 3,
      avatar: "https://via.placeholder.com/150",
      name: "Elegant Women's Dress",
      place: "Delhi, India",
      price: 599,
    },
    {
      id: 3,
      avatar: "https://via.placeholder.com/150",
      name: "Elegant Women's Dress",
      place: "Delhi, India",
      price: 599,
    },
    {
      id: 3,
      avatar: "https://via.placeholder.com/150",
      name: "Elegant Women's Dress",
      place: "Delhi, India",
      price: 599,
    },
  ];*/

  const [productData, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "http://localhost:2022/api/admin/products"
        ); // Adjust URL as needed
        setProducts(response.data); // Assuming response.data is an array of products
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);
  const styles = {
    sectionTitle: {
      fontSize: "1.5rem",
      color: "#333",
      marginBottom: "20px",
    },
  };
  return (
    <div>
      {/* Search Container */}
      <div className="search-container">
        <h2>Search for products & find verified sellers near you</h2>
        <div className="search-box">
          <button className="icon-button">
            <span role="img" aria-label="location">
              &#x1F4CD;
            </span>{" "}
            {location}
          </button>
          <input
            type="text"
            className="search-input"
            placeholder="Search Product here"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="icon-button">
            <span role="img" aria-label="microphone">
              &#x1F3A4;
            </span>
          </button>
          <button className="icon-button search-btn" onClick={handleSearch}>
            <span role="img" aria-label="search">
              &#x1F50D;
            </span>
          </button>
        </div>
      </div>
      <div className="product-card-section">
        <FirstPage />
      </div>
      <h2 style={styles.sectionTitle}>products</h2>
      <div className="product-card-section">
        {productData.length === 0 ? (
          <p>No products available.</p>
        ) : (
          productData.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        )}
      </div>
    </div>
  );
};

export default HomePage;
