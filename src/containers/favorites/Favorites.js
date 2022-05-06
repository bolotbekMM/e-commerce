import React from 'react';
import '../MainPage/sections/Bestseller.css';
import { Link } from 'react-router-dom';
import { getCollectionRequest } from '../../api/storeService';
import BestSellerItems from '../MainPage/sections/BestSellerItems';
import { ReButton } from '../../components/UI/reButton/ReButton';

const Favorites = () => {
  const [favoriteProducts, setFavoriteProducts] = React.useState([]);

  // потом нужно удалить
  const getBestsellerProducts = async () => {
    try {
      const response = await getCollectionRequest();
      const best = [];
      response.data.map((item) => {
        item.products.filter((item) =>
          item.bestseller ? best.push(item) : ''
        );
        return setFavoriteProducts(best);
      });
    } catch (error) {
      console.log(error);
    }
  };


  React.useEffect(() => {
    getBestsellerProducts();
  }, []);
// потом нужно удалить
  const [count, setCount] = React.useState(8);

  const addClickHandler = () => {
    setCount((count) => count + 4);
  };
  return (
    <div className="main-containerr">
      <div className="divOfHeader-page">
        <h3 className="bestseller-title">Избранное</h3>
      </div>
      <div className="div-of-favorite-paragraph">
        {!!favoriteProducts.length ? (
          <p className="favorite-p">
            Товаров в избранном:<span>{favoriteProducts.length}</span>
          </p>
        ) : (
          <p className="favorite-p">У Вас пока нет избранных товаров</p>
        )}
      </div>

      <div className="big-box">
          {/* потом надо отсавить только state */}
        {favoriteProducts.length !== 0 &&
          favoriteProducts.slice(0, count).map((item) => {
            return (
              <Link to={`/${item.id}`} key={item.id}>
                <BestSellerItems item={item} />
              </Link>
            );
          })}
      </div>
      <div className="div-of-button">
          {/* потом надо удалить */}
        {count === 16 || (
          <ReButton buttonStyle="short-button" onClick={addClickHandler}>
            Еще
          </ReButton>
        )}
      </div>
    </div>
  );
};

export default Favorites;
