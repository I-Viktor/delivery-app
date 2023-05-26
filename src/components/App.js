import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ShopsPage from './pages/ShopsPage';
import ShoppingCartPage from './pages/ShoppingCartPage';

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
      <Switch>
        <Route exact path="/">
          <ShopsPage
            selectedShop={selectedShop}
            handleShopSelection={handleShopSelection}
            handleAddToCart={handleAddToCart}
          />
        </Route>
        <Route path="/cart">
          <ShoppingCartPage
            cartItems={cartItems}
            handleRemoveFromCart={handleRemoveFromCart}
          />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;