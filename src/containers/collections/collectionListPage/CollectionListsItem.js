import React from 'react';
import '../../MainPage/sections/Bestseller.css';

import Triangle from '../../../assets/images/triangle.svg';
import Heard from '../../../assets/images/heard.svg';
import { Link, useParams } from 'react-router-dom';

const CollectionListsItem = ({ productItem }) => {
  const params = useParams();
  const idOfCollection = params.product;
  function ucFirst(str) {
    if (!str) return str;
    return str[0].toUpperCase() + str.slice(1);
  }

  return (
    <div className="box1">
      <Link
        to={`/collections/${idOfCollection}/${productItem.id}`}
        key={productItem.id}
      >
        <div className="divOfImage">
          <img src={productItem.url} alt="icon" />
          <img className="trianglee" src={Triangle} alt="Triangle" />
          {!!productItem.heard && (
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
          <h4 className="typeofcloses">{ucFirst(productItem.name)}</h4>
          <div className="priceOfDiv">
            <p className="price">
              <span>
                {!!productItem.oldprice
                  ? productItem.oldprice
                  : productItem.newprice}{' '}
                P
              </span>
              {!!productItem.oldprice ? (
                <span className="oldPrice">{productItem.newprice} P</span>
              ) : (
                ''
              )}
            </p>
          </div>

          <p className="size">
            <span>Размер:</span>{' '}
            <span>{`${productItem.sizemin}-${productItem.sizemax}`}</span>
          </p>
          <div className="colors-section">
            {productItem.colors.map((color, index) => {
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

export default CollectionListsItem;
