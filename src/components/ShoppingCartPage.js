import React from 'react';
import '../pages/ShoppingCartPage.css'; 

function ShoppingCartPage({ cartItems, handleRemoveFromCart }) {
  const handleRemoveClick = (productId) => {
    handleRemoveFromCart(productId);
  };

  return (
    <div className="shopping-cart-page">
      <h1>Shopping Cart</h1>
      {cartItems.length > 0 ? (
        <ul className="cart-item-list">
          {cartItems.map(item => (
            <li key={item.id}>
              <span>{item.name}</span>
              <button onClick={() => handleRemoveClick(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
}

export default ShoppingCartPage;