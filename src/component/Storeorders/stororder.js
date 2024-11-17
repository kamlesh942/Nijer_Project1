import React, { useState, useEffect } from "react";
import "./storeorder.css";

const OrderDetails = () => {
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating a data fetch from the database
    const fetchOrders = async () => {
      try {
        // Simulated API response (replace this with your actual API call)
        const response = await fetch(
          "http://localhost:2022/api/admin/getorders"
        ); // Update the URL to your backend
        if (!response.ok) {
          throw new Error("Failed to fetch orders");
        }
        const data = await response.json();
        setOrders(data.orders); // Ensure the API returns an array of orders
        setError("");
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (loading) return <p>Loading orders...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="order-container">
      <h2>Order Management</h2>
      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        orders.map((order) => (
          <div className="order-card" key={order._id}>
            <div className="order-header">
              <h3>Order ID: {order._id}</h3>
            </div>
            <div className="order-content">
              <h4>Shipping Address:</h4>
              <p>{order.address}</p>

              <h4>Payment Method:</h4>
              <p>{order.paymentMethod}</p>

              <h4>Order Items:</h4>
              <table className="order-items-table">
                <thead>
                  <tr>
                    <th>Item</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Subtotal</th>
                    <th>Avatar</th>
                  </tr>
                </thead>
                <tbody>
                  {order.orderSummary.map((item) => (
                    <tr key={item._id}>
                      <td>{item.name}</td>
                      <td>{item.quantity}</td>
                      <td>${item.price.toFixed(2)}</td>
                      <td>${(item.quantity * item.price).toFixed(2)}</td>
                      <td>
                        {item.avatar ? (
                          <img
                            src={item.avatar}
                            alt={item.name}
                            className="item-avatar"
                          />
                        ) : (
                          <span>No Image</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="order-footer">
              <p>
                <strong>Order Created At: </strong>
                {new Date(order.createdAt).toLocaleString()}
              </p>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default OrderDetails;
