import React from 'react';
import './NewProducts.css';

import { ReButton } from '../../../components/UI/reButton/ReButton';
import BestSellerItems from './BestSellerItems';
import { useSelector } from 'react-redux';

const NewProducts = () => {
  const [count, setCount] = React.useState(4);
  const [posts, setPosts] = React.useState([]);

  const dataFromStoreApi = useSelector((state) => state.products.items);

  const newProd = dataFromStoreApi.filter((item) => item.newproduct);

  React.useEffect(() => {
    setPosts(newProd);
  }, [dataFromStoreApi]);

  const addClickHandler = () => {
    setCount((count) => count + 4);
  };

  return (
    <div className="main-containerr">
      <div className="divOfHeader">
        <h3>Новинки</h3>
      </div>
      <div className="big-box">
        {posts.length !== 0 &&
          posts.slice(0, count).map((item) => {
            return <BestSellerItems key={item.id} item={item} />;
          })}
      </div>
      <div className="div-of-button">
        {count >= posts.length || (
          <ReButton buttonStyle="short-button" onClick={addClickHandler}>
            Еще
          </ReButton>
        )}
      </div>
    </div>
  );
};

export default NewProducts;
