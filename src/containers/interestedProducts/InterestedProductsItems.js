import React from 'react';
import './InterestedProducts.css';
import { favoriteAction } from '../../store/index';

import Triangle from '../../assets/images/triangle.svg';
import Heard from '../../assets/images/heard.svg';
import HeardWhite from '../../assets/images/whiteheard.svg';

import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const InterestedProductItems = (props) => {
  const { item } = props;
  const dispatch = useDispatch();

  const favoriteItems = useSelector((state) => state.favorites.favItems);

  const serchFevItem = favoriteItems.find((item) => item.id === props.item.id);

  const handleAddToFav = (item) => {
    dispatch(favoriteAction.addToFavorite(item));
  };

  const handleRemoveFromFav = (item) => {
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
    <div key={item.id} className="box-int">
      <div className="divOfImage-int">
        <img className="image-int" src={item.url} alt="icon" />
        {!!item.oldprice && (
          <>
            <div className="div-of-triangle-int">
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
            onClick={() => handleRemoveFromFav(item)}
            className="heard"
            src={Heard}
            alt="Heard"
          />
        )}
        {!serchFevItem && (
          <img
            role="presentation"
            onClick={() => handleAddToFav(item)}
            className="heard"
            src={HeardWhite}
            alt="Heard"
          />
        )}
      </div>

      <Link to={`/${item.id}`}>
        <div className="divOftitle-int">
          <p className="price-int">
            {!!item.oldprice ? (
              <span className="oldPrice-int">
                {item.newprice.toLocaleString()} P
              </span>
            ) : (
              ''
            )}
            <span>
              {!!item.oldprice
                ? item.oldprice.toLocaleString()
                : item.newprice.toLocaleString()}{' '}
              P
            </span>
          </p>
          <h4 className="typeofcloses-int">{ucFirst(item.name)}</h4>

          <p className="size-int">
            <span>Размер:</span>
            <span>{`${item.sizemin}-${item.sizemax}`}</span>
          </p>

          <div className="colors-section-int">
            {item.colors.map((color, index) => {
              return (
                <div
                  key={index}
                  style={{ backgroundColor: `${color}` }}
                  className="dot-div-int"
                ></div>
              );
            })}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default InterestedProductItems;
