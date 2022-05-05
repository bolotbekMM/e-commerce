import React from 'react';
import './NewProducts.css';

import { ReButton } from '../../../components/UI/reButton/ReButton';
import { getCollectionRequest } from '../../../api/storeService';
import BestSellerItems from './BestSellerItems';
import { Link } from 'react-router-dom';

const NewProducts = () => {
  const [count, setCount] = React.useState(4);
  const [posts, setPosts] = React.useState([]);

  const getNewProducts = async () => {
    try {
      const response = await getCollectionRequest();
      const newProd = [];
      response.data.map((item) => {
        item.products.filter((item) =>
          item.bestseller ? newProd.push(item) : ''
        );
        return setPosts(newProd);
      });
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    getNewProducts();
  }, []);

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
            return (
              <Link to={`/${item.id}`} key={item.id}>
                <BestSellerItems item={item} />
              </Link>
            );
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

export default NewProducts;
