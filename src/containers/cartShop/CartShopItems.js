import React from 'react';
import plus from '../../assets/images/plus.svg';
import close from '../../assets/images/close-icon.svg';
import { useDispatch } from 'react-redux';
import { cartAction } from '../../store/index';

const CartShopItems = ({ item }) => {
  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    dispatch(cartAction.addToCart(item));
  };
  const handleDecreaseCart = (item) => {
    dispatch(cartAction.decreaseCart(item));
  };
  const handleRemoveFromCart = (item) => {
    dispatch(cartAction.removeFromCart(item));
  };

  function ucFirst(str) {
    if (!str) return str;
    return str[0].toUpperCase() + str.slice(1);
  }
  return (
    <div className="cart-item-inner-div">
      <img
        onClick={() => handleRemoveFromCart(item)}
        role="presentation"
        src={close}
        alt="close-icon"
        className="close-icon"
      />
      <div className="cart-image-div">
        <img className="cart-image" src={item.url} alt="product-img" />
      </div>
      <div className="cart-details-div">
        <p className="cart-item-title">{ucFirst(item.name)}</p>

        <div>
          <p className="cart-item-size-text">
            Размер:
            <span>
              {item.sizemin}-{item.sizemax}
            </span>
          </p>
        </div>

        <div className="cart-tem-color-div-prod">
          Цвет:
          <div className="colors-section1-prod">
            <div className="button-for-color-div">
              <div
                className="dot-div1-prod"
                style={{ backgroundColor: item.color, display: 'inline-block' }}
              ></div>
            </div>
          </div>
        </div>

        <h3 className="cart-item-price">
          {!!item?.oldprice
            ? item?.oldprice.toLocaleString()
            : item?.newprice.toLocaleString()}{' '}
          р
          {!!item?.oldprice ? (
            <span>{item?.newprice.toLocaleString()} р</span>
          ) : (
            ''
          )}
        </h3>
        <div className="cart-item-div-of-button">
          <button
            onClick={() => {
              handleDecreaseCart(item);
            }}
            className="cart-item-button"
          >
            <span className="cart-item-minus"></span>
          </button>
          <span>{item.cartQuantity}</span>
          <button
            onClick={() => {
              handleAddToCart(item);
            }}
            className="cart-item-button"
          >
            <img src={plus} className="cart-item-plus" alt="plus-icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartShopItems;
