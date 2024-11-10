// App.js
import React, { useState } from 'react';
import './nijerstyle.css';
import { FaFacebook, FaInstagram, FaYoutube, FaSearch, FaShoppingCart, FaSignOutAlt,FaUser, FaPhone,FaSign } from 'react-icons/fa';
import { MdHome, MdHelpOutline, MdSell } from 'react-icons/md';
// import { AiOutlineShopping } from 'react-icons/ai';
import { Link } from "react-router-dom";
// import Header from './Nav/nav.js'
import Footer from './Footer/footer.js'

function Nijer() {
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
        <Link to="/nijer"><MdHome /> Home</Link>
        <Link to="/addCard"><FaShoppingCart /> Cart</Link>
        <Link to="/sell"><MdSell /> Sell</Link>
        <Link to="/contact"><MdHelpOutline /> Help</Link>
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
     {/* About Section */}
     <div className="about-section">
      <h2>About</h2>
      <p>
          Welcome to the world of elegance and craftsmanship at Nijer, founded in 2024 by Shivam Sahu. We specialize in designing and manufacturing exquisite blouses that blend traditional Indian aesthetics with modern fashion trends. As a new-age business, we are dedicated to providing our customers with high-quality, beautifully crafted blouses that not only reflect India's rich cultural heritage but also cater to the contemporary fashion needs of women.
           <br/><br/>
          <b>Our journey began with a simple vision:</b><br/>
          To create blouses that celebrate the beauty and individuality of every woman. Shivam Sahu, with his passion for fashion and commitment to excellence, established this venture to bring the finest designs to the market. In a short time, we have made our mark in the industry by offering unique, handcrafted blouses that suit a variety of occasions—be it casual wear, festive events, or weddings.
           <br/><br/>
          <b>Our Commitment to Quality</b><br/>
          At Nijer quality is at the heart of everything we do. From sourcing the finest fabrics to employing skilled artisans, we ensure that every blouse we produce meets the highest standards of craftsmanship. We use a range of fabrics, including silk, cotton, and chiffon, to cater to different preferences and occasions. Our team of expert designers stays updated with the latest fashion trends, ensuring that every piece is a perfect blend of tradition and modernity.
          We understand that a blouse is more than just a piece of clothing, it’s a statement of style and personality. That’s why we pay attention to every detail from the intricate  embroidery to the perfect fit. Each blouse is crafted with care and precision to ensure it meets the needs of our diverse clientele. Whether it’s a simple, everyday blouse or an elaborate piece for a special occasion, you can trust us to deliver the best.
          <br/><br/>
          <b>Customer Satisfaction</b><br/>
          We believe that our success lies in the satisfaction of our customers. Our goal is to provide a seamless shopping experience, both online and offline, that makes it easy for you to find the perfect blouse. Our user-friendly website is designed to showcase our collection in a way that allows you to browse and select your preferred styles with ease. We also offer customization services, so you can get a blouse tailored to your exact specifications.
          We take pride in our customer service and strive to create a lasting relationship with every client. Whether you’re shopping for your first blouse from us or you’re a returning customer, our team is always available to assist you with any questions or concerns.
          <br/><br/>
          <b>Sustainable and Ethical Practices</b><br/>
          As a responsible business, we are committed to sustainable and ethical manufacturing practices. We work closely with our artisans, ensuring fair wages and a safe working environment. We also focus on reducing waste and minimizing our environmental impact by using eco-friendly materials wherever possible.
           <br/><br/>
          <b>Our Vision</b><br/>
          Our vision is to become a leading name in the blouse manufacturing industry, known for our innovation, quality, and customer-centric approach. We aim to expand our product line, offering a wide variety of blouses that cater to different styles and preferences. With a deep respect for our cultural roots and a forward-thinking approach to fashion, we look forward to continuing our journey and serving our customers with the best in blouse fashion.
           <br/><br/>
          Thank you for choosing Nijer. We are excited to be a part of your fashion journey and look forward to providing you with beautiful, high-quality blouses for every occasion.</p>
                  {/* Add the rest of the paragraph here */}
    </div>

    {/* Bottom Navigation */}
   <Footer/>
  </div>
  );
}

export default Nijer;
