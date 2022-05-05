import React from 'react';
import './Bestseller.css';
import Triangle from '../../../assets/images/triangle.svg';
import Heard from '../../../assets/images/heard.svg';

import { ReButton } from '../../../components/UI/reButton/ReButton';
import { products } from './Adding/constants';

const Bestseller = () => {
  const [cards, setCards] = React.useState([...products]);
  const [count, setCount] = React.useState(8);
  const [discount, setDiscount] = React.useState();

  const addClickHandler = () => {
    setCount((count) => count + 4);
  };

  return (
    <div className="main-containerr">
      <div className="divOfHeader">
        <h3>Хит продаж</h3>
      </div>
      <div className="big-box">
        {cards.length !== 0 &&
          cards.slice(0, count).map((item) => {
            return (
              <div key={item.id} className="box1">
                <div className="divOfImage">
                  <img src={item.url} alt="icon" />
                  <img className="trianglee" src={Triangle} alt="Triangle" />
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
                  <h4 className="typeofcloses">{item.goodsName}</h4>
                  <p className="price">
                    <span>{item.priceForOne} P</span>
                    {item.oldPrice && (
                      <span className="oldPrice">{item.oldPrice} P</span>
                    )}
                  </p>
                  <p className="size">
                    <span>Размер:</span> <span>{item.sizeStartEnd}</span>
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

                    {/* <img
                      style={{ fill: '#858f9' }}
                      // className="color-dot"
                      src={ColorDot}
                      alt="ColorDot"
                    />{' '} */}
                  </div>
                </div>
              </div>
            );
          })}
      </div>
      <div className="div-of-button">
        <ReButton buttonStyle="short-button" onClick={addClickHandler}>
          Еще
        </ReButton>
      </div>
    </div>
  );
};

export default Bestseller;
