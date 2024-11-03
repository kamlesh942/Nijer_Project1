import React from "react";
import "./buyNowStyle.css"; // Import the CSS file for styling
import Footer from '../Footer/footer.js'
const AddressForm = () => {
  return (
    <div className="container">
      <div className="header">
        <button onClick={() => window.history.back()} className="back-button">←</button>
        <img src="/nijerLogo.jpg" alt="Nijer Logo" className="logo" />
      </div>
      
      <button className="location-button">📍 Use my location</button>

      <form>
        <div className="form-group">
          <input type="text" placeholder=" Enter Name" required  />
          <input type="text" placeholder="10 Digit mobile no." required pattern="[0-9]{10}"  />
        </div>

        <div className="form-group">
          <input type="text" placeholder="Pincode" required  />
          <input type="text" placeholder="Locality" required  />
        </div>

        <div className="form-group">
          <input type="text" placeholder="Address (Area and Street)" required  />
        </div>

        <div className="form-group">
          <input type="text" placeholder="City/Town/District" required  />
          <select required >
            <option value="" disabled>Select State</option>
            <option value="State1">State1</option>
            <option value="State2">State2</option>
            {/* Add more states as needed */}
          </select>
        </div>

        <div className="form-group">
          <input type="text" placeholder="Landmark (optional)" />
          <input type="text" placeholder="Alternate Phone" />
        </div>

        <div className="address-type">
          <label>
            <input type="radio" name="addressType" required /> Home (All Day Delivery)
          </label>
          <label>
            <input type="radio" name="addressType" /> Work (Delivery between 10 AM to 5 PM)
          </label>
        </div>

        <div className="button-group">
          <button type="submit" className="save-btn">Save and Continue</button>
          <button type="button" className="add-btn">Add To Cart</button>
        </div>
      </form>

      <Footer />
    </div>
    
  );
};

export default AddressForm;
