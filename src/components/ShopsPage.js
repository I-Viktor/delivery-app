import React from 'react';
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
              <ProductCard
                image="data:image/jpeg;base64,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"
                title="Product 1"
                price="$9.99"
              />
              <button onClick={() => handleAddToCartClick({ id: 1, name: "Product 1" })}>Add to Cart</button>
            </li>
            <li>
              <ProductCard
                image="data:image/jpeg;base64,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"
                title="Product 2"
                price="$14.99"
              />
              <button onClick={() => handleAddToCartClick({ id: 2, name: "Product 2" })}>Add to Cart</button>
            </li>
            <li>
              <ProductCard
                image="data:image/jpeg;base64,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"
                title="Product 3"
                price="$19.99"
              />
              <button onClick={() => handleAddToCartClick({ id: 3, name: "Product 3" })}>Add to Cart</button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default ShopsPage;
