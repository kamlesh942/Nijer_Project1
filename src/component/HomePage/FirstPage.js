import React from 'react';
// Import images from assets folder
import BoatNeck from '../../asset/BoatNeck.avif'; // Adjust the path based on your folder structure
import UNeck from '../../asset/UNeck.avif';
import VNeck from '../../asset/VNeck.avif';
import SweetHeart from '../../asset/SweetHeart.avif';
import SquareNeck from '../../asset/SquareNeck.avif';
import ChineseCollar from '../../asset/ChineseCollar.avif';
import HighNeck from '../../asset/HighNeck.avif';
import HalterNeck from '../../asset/HalterNeck.avif';
import first from '../../asset/U.webp';
import Second from '../../asset/1.webp';
import Third from '../../asset/3.webp';
import Fourth from '../../asset/4.webp';

function FirstPage() {
  // Sample data for the "Shop by Necklines" section, using imported images where needed
  const necklineData = [
    { id: 3, image: BoatNeck, label: 'Boat Neck' },
    { id: 4, image: VNeck, label: 'V Neck' },
    { id: 5, image: UNeck, label: 'U Neck' },
    { id: 6, image: SweetHeart, label: 'Sweetheart' },
    { id: 7, image: SquareNeck, label: 'Square Neck' },
    { id: 8, image: ChineseCollar, label: 'Chinese Collar' },
    { id: 9, image: HighNeck, label: 'High Neck' },
    { id: 10, image: HalterNeck, label: 'Halter Neck' },
  ];

  // Sample data for the "New Arrivals" section
  const productData = [
    { id: 1, image: first, title: 'Pink Shibori with Mirror Embellished Halter Strap and Stylish Back Design Blouse', description: 'Sizes S, M, L, XL, 2XL, 3XL' },
    { id: 2, image: Second, title: 'Golden U Neck with Beautiful Back Satin Sleeveless Blouse', description: 'Sizes S, M, L, XL, 2XL, 3XL' },
    { id: 3, image: Third, title: 'U Neck with Beautiful Back Satin Sleeveless Blouse in Blue', description: 'Sizes S, M, L, XL, 2XL, 3XL' },
    { id: 4, image: Fourth, title: 'Sitaramam Style - Ready to Wear Satin Silk Blouse', description: 'Sizes S, M, L, XL, 2XL, 3XL' },
  ];

  // Inline styles with hover effects
  const styles = {
    container: {
      textAlign: 'center',
      padding: '20px',
      backgroundColor: '#faf3ef',
      fontFamily: 'Arial, sans-serif',
    },
    sectionTitle: {
      fontSize: '1.5rem',
      color: '#333',
      marginBottom: '20px',
    },
    necklineList: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: '15px',
      marginBottom: '40px',
    },
    necklineCategory: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      transition: 'transform 0.3s ease', // Animation for hover effect
    },
    necklineImage: {
      width: '200px',
      height: '200px',
      transition: 'transform 0.3s ease', // Animation for hover effect
    },
    necklineLabel: {
      fontSize: '0.9rem',
      color: '#e77722',
      marginTop: '10px',
      transition: 'color 0.3s ease', // Color change on hover
    },
    newArrivals: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: '40px',
    },
    productCard: {
      width: '200px',
      textAlign: 'center',
      transition: 'transform 0.3s ease', // Animation for hover effect
    },
    productImage: {
      width: '100%',
      height: 'auto',
      borderRadius: '5px',
      transition: 'transform 0.3s ease', // Animation for hover effect
    },
    productTitle: {
      fontSize: '1rem',
      color: '#333',
      marginTop: '10px',
      marginBottom: '10px',
      transition: 'color 0.3s ease', // Color change on hover
    },
    productDescription: {
      fontSize: '0.9rem',
      color: '#555',
      marginTop: '10px',
      marginBottom: '10px',
    },
    footerNote: {
      marginTop: '20px',
      padding: '10px',
      backgroundColor: '#e77722',
      color: '#fff',
      fontSize: '0.9rem',
    },
  };

  // Render the full page with hover effects
  return (
    <div style={styles.container}>
      <h2 style={styles.sectionTitle}>Shop By Necklines</h2>
      <div style={styles.necklineList}>
        {necklineData.map((item) => (
          <div
            key={item.id}
            style={styles.necklineCategory}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            <img
              src={item.image}
              alt={item.label}
              style={styles.necklineImage}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            />
            <span
              style={styles.necklineLabel}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#ff6600')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#e77722')}
            >
              {item.label}
            </span>
          </div>
        ))}
      </div>

      <h2 style={styles.sectionTitle}>New Arrivals</h2>
      <div style={styles.newArrivals}>
        {productData.map((product) => (
          <div
            key={product.id}
            style={styles.productCard}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            <img
              src={product.image}
              alt={product.title}
              style={styles.productImage}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            />
            <h3
              style={styles.productTitle}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#ff6600')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#333')}
            >
              {product.title}
            </h3>
            <p style={styles.productDescription}>{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FirstPage;
