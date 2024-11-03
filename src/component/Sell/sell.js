// App.js
import React, { useState } from 'react';
import './sellStyle.css';
import { FaFacebook, FaInstagram, FaYoutube, FaSearch, FaShoppingCart, FaSignOutAlt,FaUser, FaPhone,FaSign } from 'react-icons/fa';
import { MdHome, MdHelpOutline, MdSell } from 'react-icons/md';
// import { AiOutlineShopping } from 'react-icons/ai';
import { Link } from "react-router-dom";
import Header from '../Nav/nav.js';
import Footer from '../Footer/footer.js';

function Sell() {
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
      image: "/clothe1.jpg"
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
      image: '/clothe2.jpg'
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

    

    <div>
        <Header/>
        <div className="App">

   

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
    <Footer/>
</div>

 

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
 
</div>
    
  
  );
}

export default Sell;