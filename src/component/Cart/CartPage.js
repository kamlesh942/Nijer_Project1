import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

function ProductDetail() {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();
  // Fetch cart items from localStorage on component mount
  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(cartItems);
  }, []);

  // Add current product to cart
  const location = useLocation();
  const { product } = location.state || {}; // Access the passed product data
  if (!product) {
    return <p>No product data available.</p>;
  }
  // Remove item from cart
  const handleRemoveFromCart = (indexToRemove) => {
    const updatedCart = cart.filter((_, index) => index !== indexToRemove);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart)); // Update localStorage
    navigate("/addCard");
  };

  return (
    <div>
      {/* Product Details Section */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          padding: "20px",
          maxWidth: "800px",
          margin: "auto",
          fontFamily: "Arial, sans-serif",
          backgroundColor: "#fff",
          marginBottom: "10%",
        }}
      >
        {/* Product Image */}
        <div style={{ flex: "1", marginRight: "20px" }}>
          <img
            src={product.avatar}
            alt={product.name}
            style={{ width: "90%", borderRadius: "8px" }}
          />
        </div>

        {/* Product Details */}
        <div style={{ flex: "2", marginLeft: "50px" }}>
          <h4>Product Detail</h4>
          <h3 style={{ margin: "10px 0", fontWeight: "bold" }}>
            {product.name}
          </h3>

          <p style={{ color: "green", fontWeight: "bold", fontSize: "18px" }}>
            Special price ₹{product.price}
          </p>
          <p style={{ fontSize: "14px", color: "#555" }}>
            {product.discount}% off
          </p>
          <p style={{ textDecoration: "line-through", color: "#888" }}>
            ₹{product.originalPrice}
          </p>

          <p style={{ fontSize: "14px", color: "#333" }}>
            <span style={{ fontWeight: "bold" }}>{product.rating} </span>
            <span>☆ </span>
            <span style={{ color: "#555" }}>
              {product.ratingsCount} ratings and {product.reviewsCount} reviews
            </span>
          </p>

          {/* Action Buttons */}
          <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
            <button
              style={{
                width: "100%",
                padding: "10px 20px",
                backgroundColor: "#c2185b",
                color: "white",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              <Link
                to="/ConfirmOrder"
                style={{ color: "white", textDecoration: "none" }}
                state={{ product }}
              >
                Place Order
              </Link>
            </button>
          </div>
        </div>
      </div>

      {/* Cart Section */}
      {cart.length > 0 && (
        <div style={{ padding: "20px", margin: "auto", maxWidth: "800px" }}>
          <h3>Cart Items</h3>
          {cart.map((item, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "10px",
                border: "1px solid #ddd",
                padding: "10px",
                borderRadius: "4px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <img
                  src={item.avatar}
                  alt={item.name}
                  style={{
                    width: "50px",
                    borderRadius: "4px",
                    marginRight: "10px",
                  }}
                />
                <p style={{ margin: 0 }}>{item.name}</p>
              </div>
              <div>
                <p style={{ margin: 0 }}>₹{item.price}</p>
              </div>
              <button
                style={{
                  width: "50%",
                  padding: "10px 20px",
                  backgroundColor: "#c2185b",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                  fontWeight: "bold",
                }}
              >
                <Link
                  to="/ConfirmOrder"
                  style={{ color: "white", textDecoration: "none" }}
                  state={{ product }}
                >
                  Place Order
                </Link>
              </button>
              <button
                onClick={() => handleRemoveFromCart(index)}
                style={{
                  padding: "5px 10px",
                  backgroundColor: "#f44336", // Red color
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductDetail;
