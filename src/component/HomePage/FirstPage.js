import React, { useEffect, useState } from "react";
import axios from "axios";


function FirstPage() {
 
  const [necklineData, setnecklineData] = useState([]); // Initialize as empty array

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "http://localhost:2022/api/admin/shopproducts"
        );
        console.log("Fetched products:", response.data); // Log the fetched data for debugging
        setnecklineData(response.data); // Set the fetched product data
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts(); // Call the fetch function when the component mounts
  }, []);
  
  const [productData, setProducts] = useState([]); // Initialize as empty array

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "http://localhost:2022/api/admin/newproducts"
        );
        console.log("Fetched products:", response.data); // Log the fetched data for debugging
        setProducts(response.data); // Set the fetched product data
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts(); // Call the fetch function when the component mounts
  }, []);

  // Inline styles with hover effects
  const styles = {
    container: {
      textAlign: "center",
      padding: "20px",
      backgroundColor: "#faf3ef",
      fontFamily: "Arial, sans-serif",
    },
    sectionTitle: {
      fontSize: "1.5rem",
      color: "#333",
      marginBottom: "20px",
    },
    necklineList: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: "15px",
      marginBottom: "40px",
    },
    necklineCategory: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      transition: "transform 0.3s ease", // Animation for hover effect
    },
    necklineImage: {
      width: "200px",
      height: "200px",
      transition: "transform 0.3s ease", // Animation for hover effect
    },
    necklineLabel: {
      fontSize: "0.9rem",
      color: "#e77722",
      marginTop: "10px",
      transition: "color 0.3s ease", // Color change on hover
    },
    newArrivals: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: "40px",
    },
    productCard: {
      width: "200px",
      textAlign: "center",
      transition: "transform 0.3s ease", // Animation for hover effect
    },
    productImage: {
      width: "100%",
      height: "auto",
      borderRadius: "5px",
      transition: "transform 0.3s ease", // Animation for hover effect
    },
    productTitle: {
      fontSize: "1rem",
      color: "#333",
      marginTop: "10px",
      marginBottom: "10px",
      transition: "color 0.3s ease", // Color change on hover
    },
    productDescription: {
      fontSize: "0.9rem",
      color: "#555",
      marginTop: "10px",
      marginBottom: "10px",
    },
    footerNote: {
      marginTop: "20px",
      padding: "10px",
      backgroundColor: "#e77722",
      color: "#fff",
      fontSize: "0.9rem",
    },
  };

  // Render the full page with hover effects
  return (
    <div style={styles.container}>
      <h2 style={styles.sectionTitle}>Shop By Nijer</h2>
      <div style={styles.necklineList}>
        {necklineData.map((item) => (
          <div
            key={item.id}
            style={styles.necklineCategory}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            <img
              src={item.avatar}
              alt={item.label}
              style={styles.necklineImage}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.1)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            />
            <span
              style={styles.necklineLabel}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#ff6600")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#e77722")}
            >
              {item.label}
            </span>
          </div>
        ))}
      </div>

      <h2 style={styles.sectionTitle}>New Arrivals</h2>
      <div style={styles.newArrivals}>
        {productData.length === 0 ? (
          <p>No products available.</p> // Shows when no products are in the data
        ) : (
          productData.map((product) => (
            <div
              key={product.id}
              style={styles.productCard}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              <img
                src={product.avatar} // Ensure `avatar` matches the property from API response
                alt={product.title}
                style={styles.productImage}
              />
              <h3
                style={styles.productTitle}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#ff6600")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#333")}
              >
                {product.title}
              </h3>
              <p style={styles.productDescription}>{product.description}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default FirstPage;
