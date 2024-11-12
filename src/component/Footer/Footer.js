import React from 'react';

function Footer() {
  // Data for each footer section
  const aboutText = `House of Blouse is an Indian fashion brand. We design blouses and sarees for the global woman who takes joy in what she wears and is particular about fit and finish.`;

  const aboutLinks = ["About Us", "HOB Studio", "Customisation", "Styling Service", "FAQs"];
  const customerCareLinks = ["Contact Us", "Returns, Alterations & Refunds", "Shipping & Delivery", "International Orders", "Terms and Conditions", "Privacy Policy"];

  // Inline styles for the footer
  const styles = {
    footerContainer: {
      backgroundColor: '#003366', // Blue color
      color: '#fff',
      padding: '100px 20px',
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      fontFamily: 'Arial, sans-serif',
    },
    section: {
      flex: '1 1 200px',
      margin: '0 20px',
      minWidth: '180px',
    },
    sectionTitle: {
      fontSize: '1.1rem',
      fontWeight: 'bold',
      marginBottom: '10px',
    },
    link: {
      color: '#fff',
      textDecoration: 'none',
      display: 'block',
      margin: '5px 0',
      fontSize: '0.9rem',
      lineHeight:'2',
    },
    aboutText: {
      fontSize: '0.9rem',
      lineHeight: '2',
      marginBottom: '20px',
      color:'#fff',
    },
    newsletterInput: {
      padding: '10px',
      width: '100%',
      marginBottom: '10px',
      borderRadius: '5px',
      border: '1px solid #ddd',
    },
    subscribeButton: {
      padding: '10px',
      backgroundColor: '#ff66b2', // Button color
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      fontSize: '0.9rem',
    },
    socialIcons: {
      display: 'flex',
      gap: '10px',
      marginTop: '20px',
    },
    icon: {
      width: '24px',
      height: '24px',
      color: '#fff',
    },
    wishlistLabel: {
      position: 'absolute',
      top: '50%',
      left: '-60px',
      transform: 'rotate(-90deg)',
      backgroundColor: '#ff66b2', // Pink for Wishlist label
      padding: '10px',
      color: '#fff',
      borderRadius: '5px 5px 0 0',
      fontSize: '0.9rem',
      fontWeight: 'bold',
    }
  };

  // Render the footer
  return (
    <footer style={styles.footerContainer}>
      {/* Wishlist label */}
      <div style={styles.wishlistLabel}>My Wishlist</div>

      {/* About section */}
      <div style={styles.section}>
        <h3 style={styles.sectionTitle}>About</h3>
        <p style={styles.aboutText}>{aboutText}</p>
      </div>

      {/* About Links */}
      <div style={styles.section}>
        <h3 style={styles.sectionTitle}>About</h3>
        {aboutLinks.map((link, index) => (
          <a key={index} href="/" style={styles.link}>{link}</a>
        ))}
      </div>

      {/* Customer Care Links */}
      <div style={styles.section}>
        <h3 style={styles.sectionTitle}>Customer Care</h3>
        {customerCareLinks.map((link, index) => (
          <a key={index} href="/" style={styles.link}>{link}</a>
        ))}
      </div>

      {/* Newsletter Subscription */}
      <div style={styles.section}>
        <h3 style={styles.sectionTitle}>Newsletter</h3>
        <p style={{ fontSize: '0.9rem', marginBottom: '10px' }}>Sign up to our newsletter to receive exclusive offers.</p>
        <input type="email" placeholder="E-mail" style={styles.newsletterInput} />
        <button style={styles.subscribeButton}>SUBSCRIBE</button>
      </div>
    </footer>
  );
}

export default Footer;
