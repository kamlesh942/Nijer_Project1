import React from 'react';
import './navStyle.css';
import { FaFacebook, FaInstagram, FaYoutube, FaSearch, FaShoppingCart,FaUser, FaPhone,FaSign,FaHome, FaUse, FaTags, FaQuestionCircle } from 'react-icons/fa';
import { MdHome, MdHelpOutline, MdSell } from 'react-icons/md';
// import { AiOutlineShopping } from 'react-icons/ai';
import { Link } from "react-router-dom";
import  { useState } from 'react';


const Header = () => {


  const [showForm, setShowForm] = useState(false);
    const [isSignUp, setIsSignUp] = useState(true);
  
  
  const toggleForm = () => setShowForm(!showForm);
  return (
    <header className="header">
      {/* <div className="logo-section">
      {/* <div className="logo"><img src="/nijerLogo.jpg" alt=""/></div> */}
        {/* <div className="search-bar">
          <select className="location-select">
            <option>All India</option>
            {/* Add more options as needed */}
          {/* </select>
          <input type="text" placeholder="Search Product" className="search-input" />
          <button className="search-button">
            <span role="img" aria-label="Search">🔍</span>
          </button>
        // </div> */} */
        {/* } */}
      // 
      {/* </div> */}
            {/* Top Navigation */}
            <div className="top-nav">
              <div className="logo"><img src="/nijerLogo.jpg" alt=""/></div>
              <div className="nav-links">
                <Link to="/"><MdHome /> Home</Link>
                <Link to="/"><FaShoppingCart /> Cart</Link>
                <Link to="/"><MdSell /> Sell</Link>
                <Link to="/"><MdHelpOutline /> Help</Link>
                <button ><FaUser /> SignIn/SignUp</button>
                {/* <a href="/"><AiOutlineShopping /> My Order</a> */}
                
              </div>
            </div> */
        


          <div className="top-nav">
      <div className="logo"><img src="/nijerLogo.jpg" alt=""/></div>

      <div className="search-bar">
          <select className="location-select">
            <option>All India</option>
            {/* Add more options as needed */}
          </select>
          <input type="text" placeholder="Search Product" className="search-input" />
          <button className="search-button">
            <span role="img" aria-label="Search">🔍</span>
          </button>
        </div>
      
      <div className="nav-links">
        <Link to="/"><MdHome /> Home</Link>
        <Link to="/addCard"><FaShoppingCart /> Cart</Link>
        <Link to="/sell"><MdSell /> Sell</Link>
        <Link to="/contact"><MdHelpOutline /> Help</Link>
        <button onClick={() => { toggleForm(); setIsSignUp(true); }}><FaUser /> SignIn/SignUp</button>
        {/* <a href="/"><AiOutlineShopping /> My Order</a> */}
        
      </div>
    </div>
    {showForm && (
      <div className="floating-form">
        <h2>{isSignUp ? 'Sign Up' : 'Sign In'}</h2>
        <form>
          <input type="text" placeholder="Username" required />
          {isSignUp && <input type="email" placeholder="Email" required />}
          <input type="password" placeholder="Password" required />
          <button type="submit">{isSignUp ? 'Register' : 'Login'}</button>
          <button type="button" onClick={toggleForm}>Close</button>
        </form>
        <button className="toggle-link" onClick={() => setIsSignUp(!isSignUp)}>
          {isSignUp ? 'Already have an account? Sign In' : 'Don\'t have an account? Sign Up'}
        </button>
      </div>
    )}

            {/* Search Section */}
            
    </header>
  );
};

export default Header;
