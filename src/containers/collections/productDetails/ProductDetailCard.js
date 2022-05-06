import React from 'react';
import './ProductDetails.css';
import shopBugIcon from '../../../assets/images/ShopBugIconToButton.svg';
import heardIconDetail from '../../../assets/images/HeardToFavButton.svg';

const ProductDetailCard = ({ details }) => {
  function ucFirst(str) {
    if (!str) return str;
    return str[0].toUpperCase() + str.slice(1);
  }
  return (
    <div className="div-card-detail">
      <h2 className="header-title">{ucFirst(details.name)}</h2>
      <div>
        <p className="articul-cvet">
          Артикул: <span>{details.articul}</span>
        </p>
        <p className="articul-cvet">
          Цвет:
          <div className="colors-section1">
            {details.colors &&
              details.colors.map((color, index) => {
                return (
                  <div
                    key={index}
                    style={{ backgroundColor: `${color}` }}
                    className="dot-div1"
                  ></div>
                );
              })}
          </div>
        </p>
      </div>

      <h3 className="prod-price">
        {!!details.oldprice ? details.oldprice : details.newprice} р
        {!!details.oldprice ? <span>{details.newprice} р</span> : ''}
      </h3>
      <div>
        <p className="otovare">О товаре:</p>
      </div>
      <span className="opisanie">{details.productDescribtion}</span>
      <div className="bottom-describe-div">
        <p>
          Размерный ряд: <span>{`${details.sizemin}-${details.sizemax}`}</span>
        </p>
        <p>
          Состав ткани:<span>{details.fabricstructure}</span>
        </p>
        <p>
          Количество в линейке :<span>{details.quantityinline}</span>
        </p>
        <p>
          Материал:<span>{details.material}</span>
        </p>
      </div>
      <div className="div-of-cart-button">
        <button className="add-to-cart-button">
          <img
            className="shopBugIcon-detail"
            src={shopBugIcon}
            alt="shop-bug"
          />
          Добавить в корзину
        </button>
        <button className="add-to-fav-button">
          <img
            className="heardIcon-detail"
            src={heardIconDetail}
            alt="heardIconDetail"
          />
        </button>
      </div>
    </div>
  );
};

export default ProductDetailCard;
