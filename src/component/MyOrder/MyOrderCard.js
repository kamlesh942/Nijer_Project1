import React, { useState } from 'react';

function ProductDeliveryCard() {
  // Default data for the product
  const [product, setProduct] = useState({
    image: 'https://1.bp.blogspot.com/-d0HUbOeVFks/XZMyd4ezuQI/AAAAAAAAMGA/UNx9-QfLxFYU8ks3ziE-tJDg6TaXKp2rwCLcBGAsYHQ/s1600/boat%2Bneck%2Bblouse%2B%252817%2529.jpg',
    title: 'Round Neck Women Blouse',
    price: 400,
    color: 'Blue',
    deliveryDate: '03 Nov',
    deliveryMessage: 'Your product will be delivered till 03 Nov',
  });

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '15px',
      maxWidth: '1000px',
      margin: 'auto',
      fontFamily: 'Arial, sans-serif'
    }}>
      
      {/* Product Image on the Left */}
      <div style={{ flexShrink: 0, marginRight: '30px' }}> {/* Increased marginRight for more space */}
        <img 
          src={product.image} 
          alt={product.title} 
          style={{ width: '100px', height: '100px', borderRadius: '4px', objectFit: 'cover' }}
        />
      </div>
      {/* Product Details and Delivery Info on the Right */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'row', justifyContent: 'space-between',marginLeft:"10%"}}>
        {/* Product Info */}
        <div style={{ marginBottom: '10px' }}>
          <h4 style={{ margin: '0', fontSize: '16px', fontWeight: 'bold' }}>{product.title}</h4>
          <p style={{ margin: '5px 0', fontSize: '14px', color: '#333' }}>₹{product.price} only</p>
          <p style={{ margin: '0', fontSize: '14px', color: '#555' }}>{product.color} color</p>
        </div>
        
        {/* Delivery Info */}
        <div style={{ fontSize: '14px', color: '#333',marginLeft:"10%"}}>
          <p style={{ margin: '0', fontWeight: 'bold' }}>Delivery on {product.deliveryDate}</p>
          <p style={{ margin: '5px 0' }}>{product.deliveryMessage}</p>
          
          {/* Rate and Review Link */}
          <a 
            href="#rate-review" 
            style={{ color: '#1a73e8', fontWeight: 'bold', fontSize: '14px', textDecoration: 'none' }}
            onClick={() => alert("Rate and review functionality coming soon!")}
          >
            ★ Rate and review Product
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProductDeliveryCard;
