import React, { useState } from 'react';
import './Contact.css';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaTruck, FaUndo, FaRegQuestionCircle } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>We're here to assist you with any inquiries or support needs</p>
      </div>

      <div className="contact-content">
        <div className="contact-container">
          {/* Contact Info */}
          <div className="contact-info">
            <h2>Get in Touch</h2>
            <p>If you have any questions or need assistance, reach out to us:</p>
            <div className="contact-details">
              <div className="contact-item">
                <FaPhoneAlt className="icon" />
                <span>+91 6263733640</span>
              </div>
              <div className="contact-item">
                <FaEnvelope className="icon" />
                <span>ShivamSahu6263@gmail.com</span>
              </div>
              <div className="contact-item">
                <FaMapMarkerAlt className="icon" />
                <span>Rajendra Nagar, Gali No. 5, Satna (M.P.)</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form">
            <h2>Let's Talk</h2>
            <p>Feel free to drop us a message below</p>
            <form>
               Name
              <input type="text" placeholder="Your Name" className="input" required />
               Email
              <input type="email" placeholder="Email" required />
               Phone No.
              <input type="tel" placeholder="Phone No." required />
               Message
              <textarea placeholder="Message" required></textarea>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>

        {/* Support Links */}
        <div className="support-links">
          <h2>Support Options</h2>
          <div className="support-options">
            <div className="support-option">
              <FaTruck className="icon" />
              <a href="/order-tracking">Track Your Order</a>
            </div>
            <div className="support-option">
              <FaUndo className="icon" />
              <a href="/returns">Return & Refund Policy</a>
            </div>
            <div className="support-option">
              <FaRegQuestionCircle className="icon" />
              <a href="/faq">FAQs</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Reusable FAQ Item Component
const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="faq-item" onClick={() => setIsOpen(!isOpen)}>
      <h3>
        {question} <span>{isOpen ? '-' : '+'}</span>
      </h3>
      {isOpen && <p>{answer}</p>}
    </div>
  );
};

export default Contact;
