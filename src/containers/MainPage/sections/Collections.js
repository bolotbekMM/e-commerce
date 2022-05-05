import React from 'react';
import './Collections.css';

import { ReButton } from '../../../components/UI/reButton/ReButton';
import { getCollectionRequest } from '../../../api/storeService';
import CollectionItem from '../../collections/CollectionItem';

const Collections = () => {
  const [posts, setPosts] = React.useState([]);

  const getCollection = async () => {
    try {
      const response = await getCollectionRequest();
      setPosts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    getCollection();
  }, []);

  const [count, setCount] = React.useState(4);
  const addClickHandler = () => {
    setCount((count) => count + 4);
  };

  return (
    <div className="main-containerr">
      <div className="divOfHeader">
        <h3>Коллекция</h3>
      </div>
      <div className="big-box">
        {posts.length !== 0 &&
          posts.slice(0, count).map((item) => {
            return <CollectionItem key={item.id} item={item} />;
          })}
      </div>
      <div className="div-of-button">
        {count === 16 || (
          <ReButton buttonStyle="short-button" onClick={addClickHandler}>
            Еще
          </ReButton>
        )}
      </div>
    </div>
  );
};

export default Collections;
