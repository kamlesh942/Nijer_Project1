import React from "react";
import "./AddToCartBuyNow.css";
//import ProductCard from "../Productgrid/productgrid";
//import { Link } from 'react-router-dom';
import ProductDetail from "../Productgrid/Card";
import { useLocation } from "react-router-dom";

/*const featuredProduct = {
    image: "https://www.southindiafashion.com/wp-content/uploads/2020/04/blue-peacock-embroidery-blouse.jpg",
    title: "Round Neck Women Blouse",
    specialPrice: 369,
    originalPrice: 2000,
    discount: "81% off",
    rating: 4,
    reviews: 125,
    ratingsCount: 1832,
};*/

/*const additionalProducts = Array(8).fill({
  image:
    "https://www.southindiafashion.com/wp-content/uploads/2020/04/blue-peacock-embroidery-blouse.jpg",
  title: "No. 303 Crackle due Drop Blouse",
  location: "Surat, Gujarat",
  price: 299,
});*/

const AddToCartBuyNow = () => {
  const location = useLocation();
  const { product } = location.state || {}; // Access the passed product data

  if (!product) {
    return <p>No product data available.</p>;
  }
  return (
    <div className="main-container">
      <div className="container">
        <ProductDetail state={{ product }} />
      </div>

      {/* Additional Products Section 
      <div className="product-card-section">
        {additionalProducts.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>*/}
    </div>
  );
};

export default AddToCartBuyNow;
