import React from 'react';
import './addCardStyle.css';
import Header from '../Nav/nav.js';
import Footer from '../Footer/footer.js';

function ProductCard({ image, title, price, discount, originalPrice, ratings, reviews }) {
  return (
    <div className="product-card">
      <img src={image} alt={title} className="product-image" />
      <div className="product-details">
        <p className="product-detail-title">Product Detail</p>
        <h4 className="product-title">{title}</h4>
        <p className="special-price">Special price <span className="price">{price}</span></p>
        <p className="discount">{discount} off <span className="original-price">{originalPrice}</span></p>
        <p className="ratings">{ratings} ratings and {reviews} review</p>
        <button className="place-order">Place Order</button>
      </div>
    </div>
  );
}

function AddCard() {
  
  return (
    <div>
      <Header />
       <div className="App">
      
      <div className="product-container">
        <ProductCard
          image='/blouse1.jpeg' // Replace with correct image path
          title="Round Neck Women Blouse"
          price="₹369"
          discount="81%"
          originalPrice="₹2,000"
          ratings="1,832"
          reviews="125"
        />
        <ProductCard
          image='/blouse1.jpeg' // Replace with correct image path
          title="Round Neck Women Blouse"
          price="₹400"
          discount="80%"
          originalPrice="₹2,000"
          ratings="1,832"
          reviews="125"
        />

         <ProductCard
          image='/blouse1.jpeg' // Replace with correct image path
          title="Round Neck Women Blouse"
          price="₹369"
          discount="81%"
          originalPrice="₹2,000"
          ratings="1,832"
          reviews="125"
        />
      </div>
      
    </div>
    <Footer />
    </div>
  );
}

export default AddCard;
