import React from 'react';


function ProductCard({ image, title, price, onAddToCart }) {
  const handleAddToCart = () => {
    onAddToCart({ image, title, price });
  };

  return (
    <div className="product-card">
      <img src={image} alt="Product" className="product-image" />
      <h2 className="product-title">{title}</h2>
      <p className="product-price">{price}</p>
      <button onClick={handleAddToCart} className="add-to-cart-button">
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
