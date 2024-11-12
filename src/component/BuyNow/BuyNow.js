import React, { useState } from "react";
import "./BuyNow.css";
import { Link } from "react-router-dom";

const BuyNow = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    pincode: "",
    locality: "",
    address: "",
    city: "",
    state: "",
    landmark: "",
    alternatePhone: "",
    addressType: "home",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="container">
      <button className="location-button">📍 Use my location</button>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="mobile"
            placeholder="10 Digit mobile no."
            value={formData.mobile}
            onChange={handleChange}
            pattern="[0-9]{10}"
            required
          />
        </div>

        <div className="form-group">
          <input
            type="text"
            name="pincode"
            placeholder="Pincode"
            value={formData.pincode}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="locality"
            placeholder="Locality"
            value={formData.locality}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group single">
          <textarea
            type="text"
            name="address"
            placeholder="Address (Area and Street)"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <input
            type="text"
            name="city"
            placeholder="City/Town/District"
            value={formData.city}
            onChange={handleChange}
            required
          />
          <select
            name="state"
            value={formData.state}
            onChange={handleChange}
            required
          >
            <option value="" disabled>Select State</option>
            <option value="State1">State1</option>
            <option value="State2">State2</option>
            {/* Add more states as needed */}
          </select>
        </div>

        <div className="form-group">
          <input
            type="text"
            name="landmark"
            placeholder="Landmark (optional)"
            value={formData.landmark}
            onChange={handleChange}
          />
          <input
            type="text"
            name="alternatePhone"
            placeholder="Alternate Phone"
            value={formData.alternatePhone}
            onChange={handleChange}
          />
        </div>

        <div className="address-type">
          <label>
            <input
              type="radio"
              name="addressType"
              value="home"
              checked={formData.addressType === "home"}
              onChange={handleChange}
            /> Home (All Day Delivery)
          </label>
          <label>
            <input
              type="radio"
              name="addressType"
              value="work"
              checked={formData.addressType === "work"}
              onChange={handleChange}
            /> Work (Delivery between 10 AM to 5 PM)
          </label>
        </div>

        <div className="button-group">
          <Link to="/MyOrderPage" ><button type="submit" className="save-btn">Save and Continue</button></Link>
         <Link to="/AddToCartBuyNow"><button type="button" className="add-btn">Add To Cart</button></Link>
        </div>
      </form>
    </div>
  );
};

export default BuyNow;
