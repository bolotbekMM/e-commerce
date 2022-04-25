import React from 'react';
import './NewProducts.css';

import Icon from '../../../assets/images/c.svg';
import { ReButton } from '../../../components/UI/reButton/ReButton';

const NewProducts = () => {
  return (
    <div className="main-containerr">
      <div className="divOfHeader">
        <h3>Новинки</h3>
      </div>
      <div className="big-box">
        <div className="box1">
          <div className="divOfImage">
            <img src={Icon} alt="icon" />
          </div>
          <div className="divOftitlee">
            <h4 className="typeofcloses">Вечернее платье</h4>
            <p className="price">
              <span>1 365</span> р
            </p>
            <p className="size">
              <span>Размер:</span> <span>42-50</span>
            </p>
          </div>
        </div>
        <div className="box1">
          <div className="divOfImage">
            <img src={Icon} alt="icon" />
          </div>
          <div className="divOftitlee">
            <h4 className="typeofcloses">Вечернее платье</h4>
            <p className="price">
              <span>1 365</span> р
            </p>
            <p className="size">
              <span>Размер:</span> <span>42-50</span>
            </p>
          </div>
        </div>
        <div className="box1">
          <div className="divOfImage">
            <img src={Icon} alt="icon" />
          </div>
          <div className="divOftitlee">
            <h4 className="typeofcloses">Вечернее платье</h4>
            <p className="price">
              <span>1 365</span> р
            </p>
            <p className="size">
              <span>Размер:</span> <span>42-50</span>
            </p>
          </div>
        </div>
        <div className="box1">
          <div className="divOfImage">
            <img src={Icon} alt="icon" />
          </div>
          <div className="divOftitlee">
            <h4 className="typeofcloses">Вечернее платье</h4>
            <p className="price">
              <span>1 365</span> р
            </p>
            <p className="size">
              <span>Размер:</span> <span>42-50</span>
            </p>
          </div>
        </div>
      </div>
      <div className="div-of-button">
        <ReButton buttonStyle="short-button">Еще</ReButton>
      </div>
    </div>
  );
};

export default NewProducts;
