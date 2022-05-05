import React from 'react';
import './Collections.css';

import Icon from '../../../assets/images/collectionsIcon/collectionimage6.png';
import Icon2 from '../../../assets/images/collectionsIcon/collectionimage3.png';
import Arrow from '../../../assets/images/arrowright.svg';
import Triangle from '../../../assets/images/triangle.svg';

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
              Смотреть все <img className="arrow" src={Arrow} alt="arrow" />
            </ReButton>
          </div>
        </div>
        <div className="box2">
          <div className="divOfImagesss">
            <img className="icon-img" src={Icon2} alt="icon" />
            <img className="triangle" src={Triangle} alt="Triangle" />
          </div>
          <div className="divOfNewCollectionButton">
            <ReButton buttonStyle="long-button">Смотреть все {'  >'} </ReButton>
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
