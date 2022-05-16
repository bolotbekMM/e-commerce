import React from 'react';
import './MainPage/sections/Bestseller.css';

import CollectionListsItem from './collections/collectionListPage/CollectionListsItem';
import Pagination from './collections/Pagination';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import InterestedProductItems from './interestedProducts/InterestedProductsItems';

const SearchPage = () => {
  const params = useParams();
  const searchItemParam = params.searchItem;

  const [posts, setPosts] = React.useState([]);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [postsPerPage] = React.useState(16);
  const [newProd, setNewProd] = React.useState([]);
  const [count] = React.useState(5);

  const interestedItem = useSelector((state) => state.products.items);
  const newProducts = interestedItem.filter((item) => item?.newproduct);

  React.useEffect(() => {
    setNewProd(newProducts);
  }, [interestedItem]);

  const dataFromServerApi = useSelector((state) => state.products.items);

  const filteredCollection = dataFromServerApi.filter(
    (item) => item.name === searchItemParam
  );

  React.useEffect(() => {
    setPosts(filteredCollection);
  }, [dataFromServerApi, searchItemParam]);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const howManyPages = Math.ceil(posts.length / postsPerPage);

  return (
    <div className="main-containerr">
      <div style={{ marginTop: '0px' }}>
        <h3 className="bestseller-title-int">
          Результаты поиска по запросу: {searchItemParam}
        </h3>
      </div>
      <div className="big-box">
        {currentPosts.map((item) => {
          return <CollectionListsItem key={item.id} productItem={item} />;
        })}
      </div>
      {currentPosts.length === 0 || (
        <div>
          <Pagination pages={howManyPages} setCurrentPage={setCurrentPage} />
        </div>
      )}

      {currentPosts.length === 0 && (
        <>
          <div className="no-result-in-search">
            <span className="no-result-in-search-span">По Вашему запросу ничего не найдено.</span>
          </div>
          <div>
            <h3 className="bestseller-title-int">Возможно Вас заинтересует</h3>
          </div>
          <div className="big-box-int">
            {newProd.slice(0, count).map((item) => {
              return <InterestedProductItems key={item.id} item={item} />;
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default SearchPage;
