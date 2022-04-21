import React from 'react';
import { Link } from 'react-router-dom';

const Collections = () => {
  return (
    <div>
      Collections
      <div>
        <Link to="/collections/leto">leto 2020</Link>{' '}
      </div>
    </div>
  );
};

export default Collections;
