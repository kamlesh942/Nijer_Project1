import React, { useState } from "react";
import "./Contact.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaTruck,
  FaUndo,
  FaRegQuestionCircle,
} from "react-icons/fa";

const Contact = () => {
  const [contactData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (error) setError("");
  };
  // Form validation
  const validateForm = () => {
    if (!contactData.name.trim()) {
      setError("Name is required");
      return false;
    }
    if (!contactData.email.trim()) {
      setError("Email is required");
      return false;
    }
    if (!contactData.subject.trim()) {
      setError("Subject is required");
      return false;
    }
    if (!contactData.message.trim()) {
      setError("Message is required");
      return false;
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(contactData.email)) {
      setError("Please enter a valid email address");
      return false;
    }
    return true;
  };
  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form
    if (!validateForm()) return;

    setLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:2022/api/users/contact",
        contactData,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true, // Important for handling cookies
        }
      );

      if (response.data.success) {
        // Clear form
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
        // Show success message or redirect
      }
      navigate("/main");
    } catch (err) {
      setError(
        err.response?.data?.message || "An error occurred during contact"
      );
    } finally {
      setLoading(false);
    }
  };
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
            <p>
              If you have any questions or need assistance, reach out to us:
            </p>
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
            <form onSubmit={handleSubmit}>
              Name
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="input"
                required
                value={contactData.name}
                onChange={handleChange}
              />
              Email
              <input
                type="email"
                placeholder="Email"
                required
                name="email"
                value={contactData.email}
                onChange={handleChange}
              />
              Subject
              <input
                type="text"
                placeholder="Enter  Subject"
                required
                name="subject"
                value={contactData.subject}
                onChange={handleChange}
              />
              Message
              <textarea
                placeholder="Message"
                required
                name="message"
                value={contactData.message}
                onChange={handleChange}
              ></textarea>
              <button type="submit" disabled={loading}>
                Submit
              </button>
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
/*const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="faq-item" onClick={() => setIsOpen(!isOpen)}>
      <h3>
        {question} <span>{isOpen ? '-' : '+'}</span>
      </h3>
      {isOpen && <p>{answer}</p>}
    </div>
  );
};*/

export default Contact;
