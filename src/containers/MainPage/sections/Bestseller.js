import React from 'react';
import './Bestseller.css';

import { ReButton } from '../../../components/UI/reButton/ReButton';
import BestSellerItems from './BestSellerItems';
import { getCollectionRequest } from '../../../api/storeService';

const Bestseller = () => {
  const [count, setCount] = React.useState(8);
  const [posts, setPosts] = React.useState([]);

  const getBestsellerProducts = async () => {
    try {
      const response = await getCollectionRequest();
      const best = [];
      response.data.map((item) => {
        item.products.filter((item) =>
          item.bestseller ? best.push(item) : ''
        );
        return setPosts(best);
      });
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    getBestsellerProducts();
  }, []);

  const addClickHandler = () => {
    setCount((count) => count + 4);
  };

  return (
    <div className="main-containerr">
      <div className="divOfHeader-mainpage">
        <h3 className="bestseller-title">Хит продаж</h3>
      </div>
      <div className="big-box">
        {posts.length !== 0 &&
          posts.slice(0, count).map((item) => {
            return <BestSellerItems item={item} />;
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

export default Bestseller;
