import React from 'react';
import './ShopsPage.css';

function ShopsPage({ selectedShop, handleShopSelection, handleAddToCart }) {
  const shops = [
    { id: 1, name: "McDonald's" },
    { id: 2, name: "Pizza Hut" },
    { id: 3, name: "Subway" },
  ];

  const handleShopClick = (shop) => {
    handleShopSelection(shop);
  };

  const handleAddToCartClick = (product) => {
    handleAddToCart(product);
  };

  return (
    <div className="shops-page">
      <h1>Shops</h1>
      <ul className="shop-list">
        {shops.map(shop => (
          <li key={shop.id}>
            <button
              onClick={() => handleShopClick(shop)}
              disabled={selectedShop && selectedShop.id !== shop.id}
              className={selectedShop && selectedShop.id === shop.id ? "active" : ""}
            >
              {shop.name}
            </button>
          </li>
        ))}
      </ul>
      {selectedShop && (
        <div className="selected-shop">
          <h2>{selectedShop.name}</h2>
          <ul className="product-list">
            <li>
              Product 1
              <button onClick={() => handleAddToCartClick({ id: 1, name: "Product 1" })}>Add to Cart</button>
            </li>
            <li>
              Product 2
              <button onClick={() => handleAddToCartClick({ id: 2, name: "Product 2" })}>Add to Cart</button>
            </li>
            <li>
              Product 3
              <button onClick={() => handleAddToCartClick({ id: 3, name: "Product 3" })}>Add to Cart</button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default ShopsPage;