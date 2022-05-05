import React from 'react';
import { ReButton } from '../../components/UI/reButton/ReButton';
import Arrow from '../../assets/images/arrowright.svg';
import './Collections.css';
import { Link } from 'react-router-dom';

const CollectionItem = ({ item }) => {
  return (
    <li className="box3">
      <div className="divOfImagesss">
        <img src={item.url} alt="icon" />
      </div>
      <div className="divOfNewCollectionButton">
        <Link to={`/collections/${item.id}`} key={item.id}>
          <ReButton buttonStyle="long-button">
            Смотреть все <img className="arrow" src={Arrow} alt="arrow" />
          </ReButton>
        </Link>
      </div>
    </li>
  );
};

export default CollectionItem;
