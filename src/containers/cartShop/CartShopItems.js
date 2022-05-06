import React from 'react';
import imageOfProd from '../../assets/images/bestsellerImages/bestseller2.jpg';
import plus from '../../assets/images/plus.svg';
import close from '../../assets/images/close-icon.svg';

const CartShopItems = () => {
  return (
    <div className="cart-item-inner-div">
      <img src={close} alt="close-icon" className="close-icon" />
      <div className="cart-image-div">
        <img className="cart-image" src={imageOfProd} alt="product-img" />
      </div>
      <div className="cart-details-div">
        <p className="cart-item-title">Вечернее платье</p>

        <div>
          <p className="cart-item-size-text">
            Размер:<span>42-50</span>
          </p>
        </div>

        <div className="cart-tem-color-div">
          Цвет:<div style={{ backgroundColor: 'yellow' }}></div>
        </div>
        <h3 className="cart-item-price">
          1 365 р<span>1 765 р</span>
        </h3>
        <div className="cart-item-div-of-button">
          <button className="cart-item-button">
            <span className="cart-item-minus"></span>
          </button>
          <span>1</span>
          <button className="cart-item-button">
            <img src={plus} className="cart-item-plus" alt="plus-icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartShopItems;
