import React from 'react';
import '../../MainPage/sections/Bestseller.css';

import CollectionListsItem from './CollectionListsItem';
import Pagination from '../Pagination';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import InterestedProductItems from '../../interestedProducts/InterestedProductsItems';

const CollectionLists = () => {
  const params = useParams();
  const idOfCollection = +params.product;

  const [posts, setPosts] = React.useState([]);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [postsPerPage] = React.useState(12);
  const [newProd, setNewProd] = React.useState([]);
  const [count] = React.useState(5);

  const interestedItem = useSelector((state) => state.products.items);
  const newProducts = interestedItem.filter((item) => item?.newproduct);

  React.useEffect(() => {
    setNewProd(newProducts);
  }, [interestedItem]);

  const dataFromServerApi = useSelector((state) => state.products.items);

  const filteredCollection = dataFromServerApi.filter(
    (item) => item.collectionId === idOfCollection
  );

  React.useEffect(() => {
    setPosts(filteredCollection);
  }, [dataFromServerApi]);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const howManyPages = Math.ceil(posts.length / postsPerPage);

  return (
    <div className="main-containerr">
      <div style={{ marginTop: '32px' }}>
        <h3 className="bestseller-title-int">Коллекция Лето 2020</h3>
      </div>
      <div className="big-box">
        {currentPosts.map((item) => {
          return <CollectionListsItem key={item.id} productItem={item} />;
        })}
      </div>
      <div>
        <Pagination pages={howManyPages} setCurrentPage={setCurrentPage} />
      </div>

      <>
        <div>
          <h3 className="bestseller-title-int">Новинки</h3>
        </div>
        <div className="big-box-int">
          {newProd.slice(0, count).map((item) => {
            return <InterestedProductItems key={item.id} item={item} />;
          })}
        </div>
      </>
    </div>
  );
};

export default CollectionLists;
