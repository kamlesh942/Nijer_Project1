import React, { useState } from 'react';

function ConfirmOrder() {
  const [address, setAddress] = useState("Aman Rajak Satna AKS University\nSatna (M.P.) 485001");
  const [orderSummary, setOrderSummary] = useState("1 item");
  const [captcha, setCaptcha] = useState(generateCaptcha());
  const [userInput, setUserInput] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("cod");
  const [isEditingAddress, setIsEditingAddress] = useState(false);
  const [isEditingOrderSummary, setIsEditingOrderSummary] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  // Function to generate random captcha
  function generateCaptcha() {
    return Math.random().toString(36).substring(2, 6);
  }

  // Handle order confirmation
  const confirmOrder = () => {
    if (userInput === captcha) {
      setShowPopup(true); // Show popup on successful confirmation
    } else {
      alert("Invalid captcha. Please try again.");
      setCaptcha(generateCaptcha());
    }
  };

  return (
    <div style={{ padding: '20px', width: '80%', maxWidth: '1200px', margin: 'auto', fontFamily: 'Arial, sans-serif' }}>
      
      {/* Delivery Address Section */}
      <div style={{ border: '1px solid #ddd', padding: '10px', marginBottom: '10px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {isEditingAddress ? (
            <>
              <textarea
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                style={{ flex: 1, padding: '10px', marginRight: '10px' }}
              />
              <button style={buttonStyle} onClick={() => setIsEditingAddress(false)}>Save</button>
            </>
          ) : (
            <>
              <div>
                <h3>Delivery Address</h3>
                <p style={{ whiteSpace: 'pre-line' }}>{address}</p>
              </div>
              <button style={buttonStyle} onClick={() => setIsEditingAddress(true)}>Change</button>
            </>
          )}
        </div>
      </div>

      {/* Order Summary Section */}
      <div style={{ border: '1px solid #ddd', padding: '10px', marginBottom: '10px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {isEditingOrderSummary ? (
            <>
              <input
                type="text"
                value={orderSummary}
                onChange={(e) => setOrderSummary(e.target.value)}
                style={{ flex: 1, padding: '5px', marginRight: '10px' }}
              />
              <button style={buttonStyle} onClick={() => setIsEditingOrderSummary(false)}>Save</button>
            </>
          ) : (
            <>
              <div>
                <h3>Order Summary</h3>
                <p>{orderSummary}</p>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Payment Method Section */}
      <div style={{ border: '1px solid #ddd', padding: '10px', marginBottom: '10px' }}>
        <h3>Payment Method</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <label>
            <input
              type="radio"
              name="payment"
              value="cod"
              checked={paymentMethod === 'cod'}
              onChange={() => setPaymentMethod('cod')}
            />
            Cash on Delivery
          </label>
          <label>
            <input
              type="radio"
              name="payment"
              value="card"
              checked={paymentMethod === 'card'}
              onChange={() => setPaymentMethod('card')}
            />
            Credit/Debit Card
          </label>
          <label>
            <input
              type="radio"
              name="payment"
              value="upi"
              checked={paymentMethod === 'upi'}
              onChange={() => setPaymentMethod('upi')}
            />
            UPI (Unified Payments Interface)
          </label>
          <label>
            <input
              type="radio"
              name="payment"
              value="netbanking"
              checked={paymentMethod === 'netbanking'}
              onChange={() => setPaymentMethod('netbanking')}
            />
            Net Banking
          </label>
        </div>
      </div>

      {/* Captcha and Confirm Order Section */}
      <div style={{ border: '1px solid #ddd', padding: '10px' ,marginBottom:'50px'}}>
        <h3>Confirm Order</h3>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ fontWeight: 'bold', fontSize: '18px', color: 'green', marginRight: '10px' }}>{captcha}</div>
          <button style={{ ...buttonStyle, marginRight: '10px' }} onClick={() => setCaptcha(generateCaptcha())}>Refresh</button>
          <input
            type="text"
            placeholder="Enter the character"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            style={{ flex: 1, padding: '5px' }}
          />
        </div>
        <button style={{ ...buttonStyle, backgroundColor: 'red', color: 'white', marginTop: '10px' }} onClick={confirmOrder}>
          Confirm Order
        </button>
      </div>

      {/* Order Confirmation Popup */}
      {showPopup && (
        <div style={popupOverlayStyle}>
          <div style={popupStyle}>
            <h3>Order Confirmation</h3>
            <p><strong>Delivery Address:</strong></p>
            <p style={{ whiteSpace: 'pre-line' }}>{address}</p>
            <p><strong>Order Summary:</strong> {orderSummary}</p>
            <p><strong>Payment Method:</strong> {paymentMethod === 'cod' ? 'Cash on Delivery' : paymentMethod}</p>
            <button style={buttonStyle} onClick={() => setShowPopup(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

// Button style for reuse
const buttonStyle = {
  padding: '5px 10px',
  backgroundColor: '#f56c6c',
  color: 'white',
  border: 'none',
  cursor: 'pointer',
  borderRadius: '4px',
  fontWeight: 'bold'
};

// Popup overlay style
const popupOverlayStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 1000
};

// Popup box style
const popupStyle = {
  backgroundColor: 'white',
  padding: '20px',
  borderRadius: '8px',
  width: '80%',
  maxWidth: '500px',
  textAlign: 'center',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'
};

export default ConfirmOrder;
