// App.js
import React, { useState } from 'react';
import './loggedInStyle.css';
import { FaFacebook, FaInstagram, FaYoutube, FaSearch, FaShoppingCart, FaSignOutAlt,FaUser, FaPhone,FaSign } from 'react-icons/fa';
import { MdHome, MdHelpOutline, MdSell } from 'react-icons/md';
// import { AiOutlineShopping } from 'react-icons/ai';
import { Link } from "react-router-dom";
// import Header from './Nav/nav.js';
import Footer from '../Footer/footer.js';

function LoggedIn() {
  // Mock product data
  const [products] = useState([
    {
      id: 1,
      name: 'No. 303 Crackle due Drop Blouse',
      location: 'Surat, Gujarat',
      price: '₹299/peace',
      image: '/blouse1.jpeg'
    },
    {
      id: 2,
      name: 'No. 303 Crackle due Drop Blouse',
      location: 'Surat, Gujarat',
      price: '₹299/peace',
      image: "/blouse1.jpeg"
    },
    {
      id: 3,
      name: 'No. 303 Crackle due Drop Blouse',
      location: 'Surat, Gujarat',
      price: '₹299/peace',
      image: '/blouse1.jpeg'
    },
    {
      id: 4,
      name: 'No. 303 Crackle due Drop Blouse',
      location: 'Surat, Gujarat',
      price: '₹299/peace',
      image: '/blouse1.jpeg'
    },
    {
      id: 5,
      name: 'No. 303 Crackle due Drop Blouse',
      location: 'Surat, Gujarat',
      price: '₹299/peace',
      image: "/blouse1.jpeg"
    },
    
    {
      id: 6,
      name: 'No. 303 Crackle due Drop Blouse',
      location: 'Surat, Gujarat',
      price: '₹299/peace',
      image: "/blouse1.jpeg"
    },
    
    {
      id: 7,
      name: 'No. 303 Crackle due Drop Blouse',
      location: 'Surat, Gujarat',
      price: '₹299/peace',
      image: "/blouse1.jpeg"
    },
    {
      id: 8,
      name: 'No. 303 Crackle due Drop Blouse',
      location: 'Surat, Gujarat',
      price: '₹299/peace',
      image: "/blouse1.jpeg"
    }
  ]);
    // State for toggling the floating form
    const [showForm, setShowForm] = useState(false);
    const [isSignUp, setIsSignUp] = useState(true);
  
  
  const toggleForm = () => setShowForm(!showForm);

  return (
    <div className="App">

    {/* <Header /> */}
    {/* Top Navigation */}
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
        <Link to="/"><FaShoppingCart /> Cart</Link>
        <Link to="/"><MdSell /> Sell</Link>
        <Link to="/"><MdHelpOutline /> Help</Link>
        <button onClick={() => { toggleForm(); setIsSignUp(true); }}><FaUser /> SignIn/SignUp</button>
        {/* <a href="/"><AiOutlineShopping /> My Order</a> */}
        
      </div>
    </div>

    {/* Search Section */}
    <div className="search-section">
      <h2>Search for products & find verified sellers near you</h2>
      <div className="search-bar">
        <select>
          <option>All India</option>
        </select>
        <input type="text" placeholder="Search Product here" />
        <button><FaSearch /></button>
      </div>
    </div>

     {/* Floating Form */}
     {/* {showForm && (
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
    )} */}

    {/* Products List */}
    <div className="product-list">
      {products.map((product) => (
        <div className="product-card" key={product.id}>
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>{product.location}</p>
          <p>{product.price}</p>
          <div className="buttons">
            <button><FaPhone /> View Number</button>
            <button>Buy Now</button>
          </div>
        </div>
      ))}
    </div>

    
    {/* Bottom Navigation */}
    <Footer />
  </div>
  );
}

export default LoggedIn;