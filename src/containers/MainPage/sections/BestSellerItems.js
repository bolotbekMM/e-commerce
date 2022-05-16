import React from 'react';
import './Bestseller.css';
import { favoriteAction } from '../../../store';

import Triangle from '../../../assets/images/triangle.svg';
import Heard from '../../../assets/images/heard.svg';
import HeardWhite from '../../../assets/images/whiteheard.svg';

import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const BestSellerItems = (props) => {
  const { item } = props;
  const dispatch = useDispatch();

  const favoriteItems = useSelector((state) => state.favorites.favItems);

  const serchFevItem = favoriteItems.find((item) => item.id === props.item.id);

  const handleAddToCart = (item) => {
    dispatch(favoriteAction.addToFavorite(item));
  };

  const handleRemoveFromCart = (item) => {
    dispatch(favoriteAction.removeFromFavorite(item));
  };

  function ucFirst(str) {
    if (!str) return str;
    return str[0].toUpperCase() + str.slice(1);
  }

  function discount(a, b) {
    const result = (b * 100) / a;
    return result.toFixed(0);
  }

  return (
    <div key={item.id} className="box1">
      <div className="divOfImage">
        <img src={item.url} alt="icon" />
        {!!item.oldprice && (
          <>
            <div className="div-of-triangle">
              <img className="trianglee" src={Triangle} alt="Triangle" />

              <span className="discount-calculatind-span">
                {`${discount(item.newprice, item.oldprice)} %`}
              </span>
            </div>
          </>
        )}

        {!!serchFevItem && (
          <img
            role="presentation"
            onClick={() => handleRemoveFromCart(item)}
            className="heard"
            src={Heard}
            alt="Heard"
          />
        )}
        {!serchFevItem && (
          <img
            role="presentation"
            onClick={() => handleAddToCart(item)}
            className="heard"
            src={HeardWhite}
            alt="Heard"
          />
        )}
      </div>

      <Link to={`/${item.id}`}>
        <div className="divOftitlee">
          <h4 className="typeofcloses">{ucFirst(item.name)}</h4>

          <p className="price">
            <span>
              {!!item.oldprice
                ? item.oldprice.toLocaleString()
                : item.newprice.toLocaleString()}
              P
            </span>
            {!!item.oldprice ? (
              <span className="oldPrice">
                {item.newprice.toLocaleString()} P
              </span>
            ) : (
              ''
            )}
          </p>

          <p className="size">
            <span>Размер:</span>{' '}
            <span>{`${item.sizemin}-${item.sizemax}`}</span>
          </p>

          <div className="colors-section">
            {item.colors.map((color, index) => {
              return (
                <div
                  key={index}
                  style={{ backgroundColor: `${color}` }}
                  className="dot-div"
                ></div>
              );
            })}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BestSellerItems;
