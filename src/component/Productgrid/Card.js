import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

function ProductDetail() {
  // Default data for the product
  //setProduct
  const navigate = useNavigate();
  const location = useLocation();
  const { product } = location.state || {}; // Access the passed product data

  if (!product) {
    return <p>No product data available.</p>;
  }
  const handleAddToCart = () => {
    let cart = JSON.parse(localStorage.getItem("cart")) || []; // Fetch cart or initialize
    cart.push(product); // Add the current product
    localStorage.setItem("cart", JSON.stringify(cart)); // Save back to localStorage
    navigate("/addCard"); // Redirect to the cart page
  };
  /* const [product] = useState({
    image: "https://www.pngmart.com/files/4/Dress-PNG-Picture.png", // Replace this with the actual image URL if available
    title: "Round Neck Women Blouse",
    specialPrice: 369,
    originalPrice: 2000,
    discount: 81,
    rating: 4,
    ratingsCount: 1832,
    reviewsCount: 125,
  });
  
  <Link
              to="/addCard"
              style={{ color: "white", textDecoration: "none" }}
              state={{ product }}
            >
              Add To Cart
            </Link>*/

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        padding: "20px",
        maxWidth: "600px",
        margin: "auto",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Product Image */}
      <div style={{ flex: "1", marginRight: "20px" }}>
        <img
          src={product.avatar}
          alt={product.name}
          style={{ width: "100%", borderRadius: "8px" }}
        />
      </div>

      {/* Product Details */}
      <div style={{ flex: "2", marginLeft: "50px" }}>
        <h4>Product Detail</h4>
        <h3 style={{ margin: "10px 0", fontWeight: "bold" }}>{product.name}</h3>

        <p style={{ color: "green", fontWeight: "bold", fontSize: "18px" }}>
          Special price ₹{product.price}
        </p>
        <p style={{ fontSize: "14px", color: "#555" }}>{product.price}% off</p>
        <p style={{ textDecoration: "line-through", color: "#888" }}>
          ₹{product.price}
        </p>

        <p style={{ fontSize: "14px", color: "#333" }}>
          <span style={{ fontWeight: "bold" }}>{product.price} </span>
          <span>☆ </span>
          <span style={{ color: "#555" }}>
            {product.price} ratings and {product.price} reviews
          </span>
        </p>

        {/* Action Buttons */}
        <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
          <button
            style={{
              width: "50%",
              padding: "10px 20px",
              backgroundColor: "#6a0dad", // Purple color
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
              Buy Now
            </Link>
          </button>

          <Link
            style={{
              display: "inline-block",
              width: "50%",
              padding: "10px 20px",
              backgroundColor: "#c2185b",
              color: "white",
              textDecoration: "none",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              fontWeight: "bold",
              textAlign: "center",
            }}
            state={{ product }}
            onClick={handleAddToCart} // Call the function before navigating
          >
            Add To Cart
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
