import React from 'react';
import './Collections.css';

import Icon from '../../../assets/images/collec1.svg';
import Icon2 from '../../../assets/images/collec2.svg';
import Arrow from '../../../assets/images/arrow.svg';
import { ReButton } from '../../../components/UI/reButton/ReButton';

const Collections = () => {
  return (
    <div className="main-containerr">
      <div className="divOfHeader">
        <h3>Коллекция</h3>
      </div>
      <div className="big-box">
        <div className="box2">
          <div className="divOfImagesss">
            <img src={Icon} alt="icon" />
          </div>
          <div className="divOfNewCollectionButton">
            <ReButton buttonStyle="long-button">
              Смотреть все <img className='arrow' src={Arrow} alt="arrow" />
            </ReButton>
          </div>
        </div>
        <div className="box2">
          <div className="divOfImagesss">
            <img className="icon-img" src={Icon2} alt="icon" />
          </div>
          <div className="divOfNewCollectionButton">
            <ReButton buttonStyle="long-button">Смотреть все > </ReButton>
          </div>
        </div>
      </div>
      <div className="div-of-button">
        <ReButton buttonStyle="short-button">Еще</ReButton>
      </div>
    </div>
  );
};

export default Collections;
