import React, { useState } from "react";
import "./Header.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  FaShoppingCart,
  FaUser,
  FaHome,
  FaInfoCircle,
  FaPhoneAlt,
} from "react-icons/fa";
//FaSearchLocation
import { Link } from "react-router-dom";

const Header = () => {
  const [showForm, setShowForm] = useState(false);
  const [isSignUp, setIsSignUp] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  //login
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
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
  //handlechange for login
  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({ ...prev, [name]: value }));
    if (error) setError("");
  };
  // Form validation
  const validateForm = () => {
    if (!formData.name.trim()) {
      setError("Name is required");
      return false;
    }
    if (!formData.email.trim()) {
      setError("Email is required");
      return false;
    }
    if (!formData.password.trim()) {
      setError("Password is required");
      return false;
    }
    if (formData.password.length < 8) {
      setError("Password must be at least 8 characters long");
      return false;
    }
    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError("Please enter a valid email address");
      return false;
    }
    // Password strength validation
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (!passwordRegex.test(formData.password)) {
      setError(
        "Password must contain at least one uppercase letter, one lowercase letter, and one number"
      );
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
        "http://localhost:2022/api/users/register",
        formData,
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
          password: "",
        });

        // Show success message or redirect
        navigate("/login");
      }
    } catch (err) {
      setError(
        err.response?.data?.message || "An error occurred during registration"
      );
    } finally {
      setLoading(false);
    }
  };
  // Handle login submission
  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    if (!loginData.email || !loginData.password) {
      setError("Please fill out both fields.");
      return;
    }
    setLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:2022/api/users/login",
        loginData,
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      if (response.data.success) {
        alert("login successfully");
        setLoginData({ email: "", password: "" });
        navigate("/"); // redirect to a dashboard or homepage
      }
    } catch (err) {
      setError(err.response?.data?.message || "An error occurred during login");
    } finally {
      setLoading(false);
    }
  };
  const handleLogout = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:2022/api/users/logout",
        {},
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      if (response.data.success) {
        alert("You have logged out successfully."); // Display success alert
        setLoginData({ email: "", password: "" });
        navigate("/main"); // Redirect to login page or homepage
      }
    } catch (err) {
      setError(
        err.response?.data?.message || "An error occurred during logout"
      );
    } finally {
      setLoading(false);
    }
  };

  const toggleForm = () => setShowForm(!showForm);
  return (
    <header className="header">
      <div className="top-nav">
        <div className="logo">
          <img src="/nijerLogo.jpg" alt="" />
        </div>

        <div className="search-bar">
          <select className="location-select">
            <option>All India</option>
            {/* Add more options as needed */}
          </select>
          <input
            type="text"
            placeholder="Search Product"
            className="search-input"
          />
          <button className="search-button">
            <span role="img" aria-label="Search">
              🔍
            </span>
          </button>
        </div>

        <div className="nav-links">
          <Link to="/HomePage">
            <FaHome /> Home
          </Link>
          <Link to="/addCard">
            <FaShoppingCart />
            Cart
          </Link>
          <Link to="/AboutUsPage">
            <FaInfoCircle /> AboutUs
          </Link>
          <Link to="/Contact">
            <FaPhoneAlt />
            Help
          </Link>
          <button
            onClick={() => {
              toggleForm();
              setIsSignUp(true);
            }}
          >
            <FaUser /> SignIn/SignUp
          </button>
          {/* <a href="/"><AiOutlineShopping /> My Order</a> */}
        </div>
      </div>
      {showForm && (
        <div className="floating-form">
          <h2>{isSignUp ? "Sign Up" : "Sign In"}</h2>
          <form onSubmit={isSignUp ? handleSubmit : handleLoginSubmit}>
            {isSignUp && (
              <input
                type="text"
                placeholder="Username"
                required
                name="name"
                value={loginData.name}
                onChange={handleChange}
              />
            )}
            <input
              type="email"
              placeholder="Email"
              required
              name="email"
              value={isSignUp ? formData.email : loginData.email}
              onChange={isSignUp ? handleChange : handleLoginChange}
            />
            <input
              type="password"
              placeholder="Password"
              required
              name="password"
              value={isSignUp ? formData.password : loginData.password}
              onChange={isSignUp ? handleChange : handleLoginChange}
            />
            <button type="submit" disabled={loading}>
              {isSignUp ? "Register" : "Login"}
            </button>
            <button type="button" onClick={toggleForm}>
              Close
            </button>
          </form>
          <p className="toggle-link" onClick={() => setIsSignUp(!isSignUp)}>
            {isSignUp
              ? "Already have an account? Sign In"
              : "Don't have an account? Sign Up"}
          </p>
          <form onSubmit={handleLogout}>
            <button type="submit" className="login-btn">
              Log Out
            </button>
          </form>
        </div>
      )}
    </header>
  );
};

export default Header;
