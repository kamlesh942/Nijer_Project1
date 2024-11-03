import React, { useState } from 'react';
import './confirmOrderStyle.css';

function ConfirmOrder() {
  const [captcha, setCaptcha] = useState('594h');
  const [captchaInput, setCaptchaInput] = useState('');

  const handleCaptchaRefresh = () => {
    // Logic to generate new captcha if needed
    setCaptcha('7pQ3'); // Example static refresh for demonstration
  };

  return (
    <div className="App">
      {/* Header */}
      <header className="header">
        <div className="back-btn"><button >←</button></div>
        <img src="./nijerLogo.jpg" alt="Nijer Logo" className="logo" />
      </header>

      {/* Delivery Address */}
      <section className="section">
        <div className="section-header">
          <h3>Delivery Address</h3>
          
          <p className="address-text">Aman Rajak<br />Satna AKS University<br />Satna (M.P.) 485001</p>

        </div>
        <button className="change-btn">Change</button>

      </section>

      {/* Order Summary */}
      <section className="section">
        <div className="section-header">
          <h3>Order Summary</h3>
          <p>1 item</p>
          <button className="change-btn">Change</button>
        </div>
        
      </section>

      {/* Payment Section */}
      <section className="payment-section">
        <label>
          <input type="radio" name="payment" defaultChecked />
          Cash on Delivery
        </label>

        <div className="captcha-container">
          <span className="captcha-text">{captcha}</span>
          <button onClick={handleCaptchaRefresh} className="refresh-btn">Refresh</button>
          <input
            type="text"
            placeholder="Enter the character"
            value={captchaInput}
            onChange={(e) => setCaptchaInput(e.target.value)}
          />
          <button className="confirm-btn">Confirm Order</button>
        </div>
      </section>
    </div>
  );
}

export default ConfirmOrder;
