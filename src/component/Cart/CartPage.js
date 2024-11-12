import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function ProductDetail() {
  // Default data for the product
  const [product, setProduct] = useState({
    image: 'https://www.pngmart.com/files/4/Dress-PNG-Picture.png', // Replace this with the actual image URL if available
    title: 'Round Neck Women Blouse',
    specialPrice: 369,
    originalPrice: 2000,
    discount: 81,
    rating: 4,
    ratingsCount: 1832,
    reviewsCount: 125,
  });

  return (
    <div style={{ display: 'flex', alignItems: 'center', padding: '20px', maxWidth: '800px', margin: 'auto', fontFamily: 'Arial, sans-serif', backgroundColor:'#fff',marginBottom:'10%'}}>
      
      {/* Product Image */}
      <div style={{ flex: '1', marginRight: '20px' }}>
        <img 
          src={product.image} 
          alt={product.title} 
          style={{ width: '90%', borderRadius: '8px' }}
        />
      </div>
      
      {/* Product Details */}
      <div style={{ flex: '2',marginLeft:"50px" }}>
        <h4>Product Detail</h4>
        <h3 style={{ margin: '10px 0', fontWeight: 'bold' }}>{product.title}</h3>
        
        <p style={{ color: 'green', fontWeight: 'bold', fontSize: '18px' }}>Special price ₹{product.specialPrice}</p>
        <p style={{ fontSize: '14px', color: '#555' }}>{product.discount}% off</p>
        <p style={{ textDecoration: 'line-through', color: '#888' }}>₹{product.originalPrice}</p>
        
        <p style={{ fontSize: '14px', color: '#333' }}>
          <span style={{ fontWeight: 'bold' }}>{product.rating} </span> 
          <span>☆ </span> 
          <span style={{ color: '#555' }}>
            {product.ratingsCount} ratings and {product.reviewsCount} reviews
          </span>
        </p>
        
        {/* Action Buttons */}
        <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
          <button 
            style={{
              width:'100%',
              padding: '10px 20px',
              backgroundColor: '#6a0dad', // Purple color
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontWeight: 'bold'
            }}
          >
            <Link to="/ConfirmOrder" style={{color:"white",textDecoration:"none"}}>
            Place Order
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
