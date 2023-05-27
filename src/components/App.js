import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ShopsPage from './ShopsPage';
import ShoppingCartPage from './ShoppingCartPage';

function App() {
  const [selectedShop, setSelectedShop] = useState(null);
  const [cartItems, setCartItems] = useState([]);

  const handleShopSelection = (shop) => {
    setSelectedShop(shop);
  };

  const handleAddToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const handleRemoveFromCart = (productId) => {
    const updatedCartItems = cartItems.filter(item => item.id !== productId);
    setCartItems(updatedCartItems);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <ShopsPage
            selectedShop={selectedShop}
            handleShopSelection={handleShopSelection}
            handleAddToCart={handleAddToCart}
          />
        } />
        <Route path="/cart" element={
          <ShoppingCartPage
            cartItems={cartItems}
            handleRemoveFromCart={handleRemoveFromCart}
          />
        } />
      </Routes>
    </Router>
  );
}

export default App;