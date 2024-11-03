import React from "react";
import "./myOrderStyle.css";
import Header from "../Nav/nav";

const ProductCard = ({ image,name, price, color, deliveryDate }) => {
  return (
    <div className="product-card">

      <div className="product-image">
      <img src={image} alt={name} />

      </div>
      <div className="product-details">
        <h3>{name}</h3>
        <p>₹{price} only</p>
        <p>{color} color</p>
        <p className="delivery-date">Delivery on {deliveryDate}</p>
        <p>your product will be delivered till {deliveryDate}</p>
        <a href="#" className="review-link">⭐ Rate and review Product</a>
      </div>
    </div>
  );
};

const MyOrder = () => {
  const products = [
    {
      image:'clothe2.jpg',
      name: "Round Neck Women Blouse",
      price: 400,
      color: "Blue",
      deliveryDate: "03 Nov",
    },
    {
      image:'clothe3.jpeg',

      name: "Round Neck Women Blouse",
      price: 400,
      color: "Blue",
      deliveryDate: "03 Nov",
    },
    {
      image:'/clothe4.jpg',

      name: "Round Neck Women Blouse",
      price: 400,
      color: "Blue",
      deliveryDate: "03 Nov",
    },
    {
      image:'/clothe5.jpg',

      name: "Round Neck Women Blouse",
      price: 400,
      color: "Blue",
      deliveryDate: "03 Nov",
    }
  ];

  return (
    <div>
      <Header />
      <div className="product-list">
      {products.map((product, index) => (
        <ProductCard key={index} {...product} />
      ))}
    </div>
  </div>
  );
};

export default MyOrder;
