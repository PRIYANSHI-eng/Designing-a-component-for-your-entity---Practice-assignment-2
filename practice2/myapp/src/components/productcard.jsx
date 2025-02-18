// productcard.jsx
import React from 'react';
import ViewProductButton from '../components/button'; // Importing the button component

const Productcard = () => {
  // Static product details
  const productImage = "https://contentgrid.homedepot-static.com/hdus/en_US/DTCCOMNEW/Articles/discover-the-secret-language-of-flowers-2022-hero.jpeg";
  const productName = "Flowers";
  const productPrice = "$50";

  return (
    <div className="product-card">
      <img src={productImage} alt={productName} />
      <h2>{productName}</h2>
      <p>{productPrice}</p>
      <ViewProductButton />
    </div>
  );
};

export default Productcard;
