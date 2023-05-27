import React from 'react';

function ProductCard({ image, title, price }) {
  return (
    <div className="product-card">
      <img src={image} alt="Product" className="product-image" />
      <h2 className="product-title">{title}</h2>
      <p className="product-price">{price}</p>
    </div>
  );
}

export default ProductCard;
