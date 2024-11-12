import React from 'react';
import ProductDeliveryCard from './MyOrderCard';
import './MyOrderPage.css'; // Assuming you create a CSS file for this component

function MyOrderPage() {
  const products = [
    {
      id: 1,
      name: "Round Neck Women Blouse",
      image: "https://1.bp.blogspot.com/-d0HUbOeVFks/XZMyd4ezuQI/AAAAAAAAMGA/UNx9-QfLxFYU8ks3ziE-tJDg6TaXKp2rwCLcBGAsYHQ/s1600/boat%2Bneck%2Bblouse%2B%252817%2529.jpg",
      price: 400,
      color: "Blue",
      deliveryDate: "03 Nov",
      deliveryMessage: "Your product will be delivered till 03 Nov",
    },
    {
      id: 1,
      name: "Round Neck Women Blouse",
      image: "https://1.bp.blogspot.com/-d0HUbOeVFks/XZMyd4ezuQI/AAAAAAAAMGA/UNx9-QfLxFYU8ks3ziE-tJDg6TaXKp2rwCLcBGAsYHQ/s1600/boat%2Bneck%2Bblouse%2B%252817%2529.jpg",
      price: 400,
      color: "Blue",
      deliveryDate: "03 Nov",
      deliveryMessage: "Your product will be delivered till 03 Nov",
    },
  ];

  return (
    <div className="my-order-page">
      {products.map((product) => (
        <ProductDeliveryCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default MyOrderPage;
