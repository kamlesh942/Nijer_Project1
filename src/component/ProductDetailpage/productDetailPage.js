import React from 'react';
import './productDetailStyle.css';
import Header from '../Nav/nav.js';
import Footer from '../Footer/footer.js';

const ProductCard = ({ imgUrl, title, price, discount, rating, reviews }) => {
    return (
        <div className="product-card">
            < Header />
            <img src={imgUrl} alt={title} className="product-image" />
            <div className="product-details">
                <p className="product-category">Product Detail</p>
                <h2 className="product-title">{title}</h2>
                <p className="product-price">Special price ₹{price}</p>
                <p className="product-discount">{discount}% off ₹2,000</p>
                <p className="product-rating">{rating} ★</p>
                <p className="product-reviews">{reviews} ratings and 125 reviews</p>
                <div className="button-group">
                    <button className="buy-now">Buy Now</button>
                    <button className="add-to-cart">Add to Cart</button>
                </div>
            </div>
            < Footer />
        </div>
    );
};



const ProductList = () => {
    return (
        <div className="product-list">
            <ProductCard 
                imgUrl='/blouse1.jpeg'
                title="Round Neck Women Blouse"
                price="369"
                discount="81"
                rating="4"
                reviews="1,832"
            />

            
           
        </div>

    );
};



export default ProductList;
