import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

function ConfirmOrder() {
  const [address, setAddress] = useState(
    "Aman Rajak Satna AKS University\nSatna (M.P.) 485001"
  );
  const [orderSummary, setOrderSummary] = useState([]);
  const [captcha, setCaptcha] = useState(generateCaptcha());
  const [userInput, setUserInput] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("cod");
  const [isEditingAddress, setIsEditingAddress] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const location = useLocation();
  const { product } = location.state || {};

  useEffect(() => {
    if (product) {
      setOrderSummary([
        {
          name: product.name,
          price: product.price,
          avatar: product.avatar,
          quantity: 1,
        },
      ]);
    }
  }, [product]);

  if (!product) {
    return <p>No product data available.</p>;
  }

  function generateCaptcha() {
    return Math.random().toString(36).substring(2, 6);
  }

  const sendOrderToAdmin = async (orderData) => {
    try {
      const response = await fetch("http://localhost:2022/api/admin/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      });

      if (response.ok) {
        console.log("Order sent to admin successfully!");
        alert("Your order has been placed successfully!");
      } else {
        console.error("Failed to send order to admin");
        alert("Failed to place order. Please try again.");
      }
    } catch (error) {
      console.error("Error sending order to admin:", error);
    }
  };

  const confirmOrder = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    if (userInput === captcha) {
      setOrderSummary((prevOrderSummary) => {
        const productExists = prevOrderSummary.some(
          (item) => item.name === product.name
        );
        if (!productExists) {
          return [
            ...prevOrderSummary,
            {
              name: product.name,
              price: product.price,
              avatar: product.avatar,
              quantity: 1,
            },
          ];
        }
        return prevOrderSummary;
      });

      const orderData = {
        address,
        orderSummary,
        paymentMethod,
      };

      sendOrderToAdmin(orderData);
      setShowPopup(true);
    } else {
      alert("Invalid captcha. Please try again.");
      setCaptcha(generateCaptcha());
    }
  };

  return (
    <div
      style={{
        padding: "20px",
        width: "80%",
        maxWidth: "1200px",
        margin: "auto",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Delivery Address Section */}
      <div
        style={{
          border: "1px solid #ddd",
          padding: "10px",
          marginBottom: "10px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {isEditingAddress ? (
            <>
              <textarea
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                style={{ flex: 1, padding: "10px", marginRight: "10px" }}
              />
              <button
                style={buttonStyle}
                onClick={() => setIsEditingAddress(false)}
              >
                Save
              </button>
            </>
          ) : (
            <>
              <div>
                <h3>Delivery Address</h3>
                <p style={{ whiteSpace: "pre-line" }}>{address}</p>
              </div>
              <button
                style={buttonStyle}
                onClick={() => setIsEditingAddress(true)}
              >
                Change
              </button>
            </>
          )}
        </div>
      </div>

      {/* Order Summary Section */}
      <div
        style={{
          border: "1px solid #ddd",
          padding: "10px",
          marginBottom: "10px",
        }}
      >
        <h3>Order Summary</h3>
        {orderSummary.length > 0 ? (
          orderSummary.map((item, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                border: "1px solid #ddd",
                padding: "10px",
                marginBottom: "5px",
                borderRadius: "4px",
              }}
            >
              <img
                src={item.avatar}
                alt={item.name}
                style={{ width: "50px", borderRadius: "4px" }}
              />
              <p style={{ flex: 1, marginLeft: "10px" }}>{item.name}</p>
              <p>₹{item.price}</p>
            </div>
          ))
        ) : (
          <p>No items in the order summary.</p>
        )}
      </div>

      {/* Payment Method Section */}
      <div
        style={{
          border: "1px solid #ddd",
          padding: "10px",
          marginBottom: "10px",
        }}
      >
        <h3>Payment Method</h3>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <label>
            <input
              type="radio"
              name="payment"
              value="cod"
              checked={paymentMethod === "cod"}
              onChange={() => setPaymentMethod("cod")}
            />
            Cash on Delivery
          </label>
          <label>
            <input
              type="radio"
              name="payment"
              value="card"
              checked={paymentMethod === "card"}
              onChange={() => setPaymentMethod("card")}
            />
            Credit/Debit Card
          </label>
          <label>
            <input
              type="radio"
              name="payment"
              value="upi"
              checked={paymentMethod === "upi"}
              onChange={() => setPaymentMethod("upi")}
            />
            UPI (Unified Payments Interface)
          </label>
          <label>
            <input
              type="radio"
              name="payment"
              value="netbanking"
              checked={paymentMethod === "netbanking"}
              onChange={() => setPaymentMethod("netbanking")}
            />
            Net Banking
          </label>
        </div>
      </div>

      {/* Captcha and Confirm Order Section */}
      <form
        onSubmit={confirmOrder}
        style={{
          border: "1px solid #ddd",
          padding: "10px",
          marginBottom: "50px",
        }}
      >
        <h3>Confirm Order</h3>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              fontWeight: "bold",
              fontSize: "18px",
              color: "green",
              marginRight: "10px",
            }}
          >
            {captcha}
          </div>
          <button
            type="button"
            style={{ ...buttonStyle, marginRight: "10px" }}
            onClick={() => setCaptcha(generateCaptcha())}
          >
            Refresh
          </button>
          <input
            type="text"
            placeholder="Enter the character"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            style={{ flex: 1, padding: "5px" }}
          />
        </div>
        <button
          type="submit"
          style={{
            ...buttonStyle,
            backgroundColor: "red",
            color: "white",
            marginTop: "10px",
          }}
        >
          Confirm Order
        </button>
      </form>

      {/* Order Confirmation Popup */}
      {showPopup && (
        <div style={popupOverlayStyle}>
          <div style={popupStyle}>
            <h3>Your order has been placed successfully!</h3>
            <button style={buttonStyle} onClick={() => setShowPopup(false)}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

const buttonStyle = {
  padding: "10px 20px",
  border: "none",
  borderRadius: "4px",
  backgroundColor: "#007bff",
  color: "white",
  cursor: "pointer",
  fontSize: "14px",
};

const popupOverlayStyle = {
  position: "fixed",
  top: "0",
  left: "0",
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const popupStyle = {
  backgroundColor: "white",
  padding: "20px",
  borderRadius: "4px",
  textAlign: "center",
  boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
};

export default ConfirmOrder;
