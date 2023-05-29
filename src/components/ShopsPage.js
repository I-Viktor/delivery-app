import React,{ useState } from 'react';
import '../pages/ShopPage.css';
import ProductCard from '../components/ProductCard'; 

function ShopsPage({ selectedShop, handleShopSelection, handleAddToCart }) {
  const shops = [
    { id: 1, name: "McDonald's" },
    { id: 2, name: "Pizza Hut" },
    { id: 3, name: "Subway" },
  ];

  const handleShopClick = (shop) => {
    handleShopSelection(shop);
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
              <ProductCard
                image=""
                title="Product 1"
                price="$9.99"
                onAddToCart={handleAddToCart}
              />
              
            </li>
            <li>
              <ProductCard
                image=""
                title="Product 2"
                price="$14.99"
                onAddToCart={handleAddToCart}
              />
              
            </li>
            <li>
              <ProductCard
                image=""
                title="Product 3"
                price="$19.99"
                onAddToCart={handleAddToCart}
              />
             
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default ShopsPage;
