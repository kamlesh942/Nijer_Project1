import React from 'react';
import './footerStyle.css';

 
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    

    
    <footer className="footer">

      <div className="social-icons">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="icon fb-icon">
          <FaFacebookF />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="icon insta-icon">
          <FaInstagram />
        </a>
        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="icon yt-icon">
          <FaYoutube />
        </a>
      </div>
    </footer>

    
  );
};

export default Footer;
