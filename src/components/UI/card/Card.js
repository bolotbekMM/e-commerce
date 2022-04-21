import React from 'react';
import './Card.css';

const Card = ({ children }) => {
  return (
    <div className="card">
      <div className="main-div">
        <div className="content-div">{children}</div>
      </div>
    </div>
  );
};

export default Card;
