import React from 'react';
import '../MainPage/sections/Bestseller.css';
import BestSellerItems from '../MainPage/sections/BestSellerItems';
import { useSelector } from 'react-redux';
import InterestedProductItems from '../interestedProducts/InterestedProductsItems';

const Favorites = () => {
  const [posts, setPosts] = React.useState([]);

  const [interestedProd, setinterestedProd] = React.useState([]);

  const [count] = React.useState(5);

  const favItem = useSelector((state) => state.favorites.favItems);
  const interestedItem = useSelector((state) => state.products.items);
  const interstedProd = interestedItem.filter((item) => item?.oldprice);

  React.useEffect(() => {
    setPosts(favItem);
    setinterestedProd(interstedProd);
  }, [favItem, interestedItem]);

  return (
    <div className="main-containerr">
      <div className="divOfHeader-page">
        <h3 className="bestseller-title">Избранное</h3>
      </div>
      <div className="div-of-favorite-paragraph">
        {posts.length > 0 ? (
          <p className="favorite-p">
            Товаров в избранном:<span>{posts.length}</span>
          </p>
        ) : (
          <p className="favorite-p">У Вас пока нет избранных товаров</p>
        )}
      </div>

      {posts.length > 0 && (
        <div className="big-box">
          {posts.map((item) => {
            return <BestSellerItems key={item.id} item={item} />;
          })}
        </div>
      )}

      {posts.length === 0 && (
        <>
          <div>
            <h3 className="bestseller-title-int">Возможно Вас заинтересует</h3>
          </div>
          <div className="big-box-int">
            {interestedProd.slice(0, count).map((item) => {
              return <InterestedProductItems key={item.id} item={item} />;
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default Favorites;
