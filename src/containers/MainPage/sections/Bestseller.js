import React from 'react';
import './Bestseller.css';

import { ReButton } from '../../../components/UI/reButton/ReButton';
import BestSellerItems from './BestSellerItems';
import { useSelector } from 'react-redux';

const Bestseller = () => {
  const [count, setCount] = React.useState(8);
  const [posts, setPosts] = React.useState([]);

  const dataFromStoreApi = useSelector((state) => state.products.items);

  const best = dataFromStoreApi.filter((item) => item.bestseller);

  React.useEffect(() => {
    setPosts(best);
  }, [dataFromStoreApi]);

  const addClickHandler = () => {
    setCount((count) => count + 4);
  };

  return (
    <div className="main-containerr">
      <div className="divOfHeader">
        <h3 className="bestseller-title">Хит продаж</h3>
      </div>
      <div className="big-box">
        {posts.length !== 0 &&
          posts.slice(0, count).map((item) => {
            return <BestSellerItems key={item.id} item={item} />;
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
