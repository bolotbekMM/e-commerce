import React from 'react';
import './CartShop.css';
import CartShopItems from './CartShopItems';

const CartShop = () => {
  return (
    <div className="main-container">
      <div className="div-of-cart-page">
        <div className="div-of-cart-items">
          <CartShopItems />
          <CartShopItems />
          <CartShopItems />
        </div>
        <div className="div-of-cart-total-count"></div>
      </div>
    </div>
  );
};

export default CartShop;
