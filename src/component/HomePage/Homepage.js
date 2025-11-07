// src/components/HomePage.js
import React, { useState, useEffect } from "react";
import "./HomePage.css";
import ProductCard from "../Productgrid/productgrid";
import axios from "axios";

const HomePage = () => {
  // Default location
  const [location] = useState("All India");

  // Filter states
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [maxPrice, setMaxPrice] = useState("");

  // Product states
  const [productData, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  // ✅ Fetch all products initially
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:2022/api/admin/products");
        setProducts(response.data);
        setFilteredProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  // ✅ Real-time combined filtering (Name + Category + Single Price)
  useEffect(() => {
    let filtered = [...productData];

    // 1️⃣ Filter by name
    const query = searchQuery.trim().toLowerCase();
    if (query !== "") {
      filtered = filtered.filter((product) =>
        product.name.toLowerCase().includes(query)
      );
    }

    // 2️⃣ Filter by category
    if (selectedCategory !== "All") {
      filtered = filtered.filter(
        (product) =>
          product.category &&
          product.category.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    // 3️⃣ Filter by price (<= input value)
    if (maxPrice !== "") {
      const priceLimit = Number(maxPrice);
      filtered = filtered.filter(
        (product) => Number(product.price) <= priceLimit
      );
    }

    setFilteredProducts(filtered);
  }, [searchQuery, selectedCategory, maxPrice, productData]);

  // Inline style
  const styles = {
    sectionTitle: {
      fontSize: "1.5rem",
      color: "#333",
      marginBottom: "20px",
    },
  };

  return (
    <div>
      {/* 🔎 Search Section */}
      <div className="search-container">
  <h2>Search and Filter Products Easily</h2>
  {/* Right side search box */}
    <div className="search-box">
      <button className="icon-button">
        <span role="img" aria-label="location">📍</span> {location}
      </button>
      <input
        type="text"
        className="search-input"
        placeholder="Search Product here"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button className="icon-button">
        <span role="img" aria-label="microphone">🎤</span>
      </button>
      <button className="icon-button search-btn">
        <span role="img" aria-label="search">🔍</span>
      </button>
    </div>

  <div className="search-filter-wrapper">
    
    {/* Left side filters */}
    <div className="filter-container">
      <label>Category</label>
      <select
        className="filter-dropdown"
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        <option value="All">All Categories</option>
        <option value="Shirt">Shirt</option>
        <option value="Pant">Pant</option>
        <option value="Blouse">Blouse</option>
        <option value="Saree">Saree</option>
        <option value="Dress">Dress</option>
      </select>

      <label>Max Price (₹)</label>
      <input
        type="number"
        className="price-input"
        placeholder="e.g. 500"
        value={maxPrice}
        onChange={(e) => setMaxPrice(e.target.value)}
      />
    </div>

    
  </div>
</div>


      {/* 🛍️ Product Section */}
      <h2 style={styles.sectionTitle}>Products</h2>

      <div className="product-card-section">
        {filteredProducts.length === 0 ? (
          <p>No products found.</p>
        ) : (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        )}
      </div>
    </div>
  );
};

export default HomePage;
