import React from 'react';
import './contactStyle.css';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';

import Header from '../Nav/nav';
import Footer from '../Footer/footer';

const ContactPage = () => {
  return (
    <div>
      <Header />
      <div className="contact-page">
      
      <div className="contact-container">
        <div className="contact-info">
          <h2>Contact Us</h2>
          <p>We are here to help you</p>
          <div className="contact-details">
            <div className="contact-item">
              <FaPhoneAlt className="icon" /> 
              <span>Phone: +91 6263733640</span>
            </div>
            <div className="contact-item">
              <FaEnvelope className="icon" /> 
              <span>Email: ShivamSahu6263@gmail.com</span>
            </div>
            <div className="contact-item">
              <FaMapMarkerAlt className="icon" /> 
              <span>Location: Rajendra Nagar, Gali No. 5, Satna (M.P.)</span>
            </div>
          </div>
          
        </div>

        <div className="contact-form">
          <h2>Let's Talk</h2>
          <p>Feel free to drop us a line below</p>
          <form>
            <input type="text" placeholder="Your Name" className="Input" required />
            <input type="email" placeholder="Email" required />
            <input type="tel" placeholder="Phone No." required />
            <textarea placeholder="Message" required></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
      
    </div>
    <Footer />
    </div>
  );
};

export default ContactPage;
