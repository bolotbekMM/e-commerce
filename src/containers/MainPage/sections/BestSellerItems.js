import React from 'react';
import './Bestseller.css';
import Triangle from '../../../assets/images/triangle.svg';
import Heard from '../../../assets/images/heard.svg';

const BestSellerItems = ({ item }) => {
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

        {!!item.heard && (
          <img
            role="presentation"
            onClick={(prev) => !prev}
            className="heard"
            src={Heard}
            alt="Heard"
          />
        )}
      </div>

      <div className="divOftitlee">
        <h4 className="typeofcloses">{ucFirst(item.name)}</h4>

        <p className="price">
          <span>{!!item.oldprice ? item.oldprice : item.newprice} P</span>
          {!!item.oldprice ? (
            <span className="oldPrice">{item.newprice} P</span>
          ) : (
            ''
          )}
        </p>

        <p className="size">
          <span>Размер:</span> <span>{`${item.sizemin}-${item.sizemax}`}</span>
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
    </div>
  );
};

export default BestSellerItems;
