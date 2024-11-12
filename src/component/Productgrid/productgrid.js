// src/components/ProductCard.js
import React from 'react';
import styled from 'styled-components';
import { FiPhone } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const CardContainer = styled.div`
  width: 200px;
  border: 1px solid #ddd;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  font-family: Arial, sans-serif;
  background-color: #fff;
`;

const Image = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
`;

const Content = styled.div`
  padding: 10px;
`;

const Title = styled.h3`
  font-size: 1rem;
  color: #333;
  margin: 10px 0 5px;
`;

const Location = styled.p`
  color: #666;
  font-size: 0.9rem;
  margin: 5px 0;
`;

const Price = styled.p`
  font-size: 1.1rem;
  color: #333;
  margin: 5px 0;
  font-weight: bold;
`;

const Button = styled.button`
  display: block;
  width: 90%;
  margin: 5px auto;
  padding: 8px 10px;
  font-size: 0.9rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
`;

const ViewButton = styled(Button)`
  background-color: transparent;
  color: #1e1b5a;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  &:hover {
    color: #004aad;
  }
`;

const BuyButton = styled(Button)`
  background-color: #4a1b5a;
  color: white;
  &:hover {
    background-color: #330d3d;
  }
`;

const ProductCard = () => {
  // Default data for demonstration
  const product = {
    imageUrl: 'https://image26.stylesimo.com/o_img/2017/08/09/231420-10380357/women-s-elegant-solid-evening-pleated-chiffon-dress.jpg',
    name: "NO. 303 Crackle due Drop Blouse",
    location: "Surat, Gujarat",
    price: "₹ 299/peace",
  };

  const handleViewNumber = () => {
    alert("Contact number: +91-XXXXXXXXXX");
  };

  const handleBuyNow = () => {
    alert("Redirecting to purchase page..."); 
  };

  return (
    <CardContainer>
      <Image src={product.imageUrl} alt={product.name} />
      <Content>
        <Title>{product.name}</Title>
        <Location>{product.location}</Location>
        <Price>{product.price}</Price>
        <ViewButton onClick={handleViewNumber}>
          <FiPhone /> View Number
        </ViewButton>
        <Link to="/BuyNow"><BuyButton >Buy Now</BuyButton></Link>
      </Content>
    </CardContainer>
  );
};

export default ProductCard;
