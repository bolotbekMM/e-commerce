import React from 'react';
import '../../MainPage/sections/Bestseller.css';

import { getCollectionRequest } from '../../../api/storeService';
import CollectionListsItem from './CollectionListsItem';
import Pagination from '../Pagination';
import { useParams } from 'react-router-dom';

// import { ReButton } from '../../../components/UI/reButton/ReButton';

const CollectionLists = () => {
  const params = useParams();
  const idOfCollection = params.product;

  const [posts, setPosts] = React.useState([]);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [postsPerPage] = React.useState(12);

  const getCollection = async () => {
    try {
      const response = await getCollectionRequest();
      setPosts(
        response.data.filter((item) => item.id === +idOfCollection)[0].products
      );
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    getCollection();
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const howManyPages = Math.ceil(posts.length / postsPerPage);

  return (
    <div className="main-containerr">
      <div className="divOfHeader">
        <h3>Коллекция Лето 2020</h3>
      </div>
      <div className="big-box">
        {currentPosts.map((item) => {
          return <CollectionListsItem key={item.id} productItem={item} />;
        })}
      </div>
      <div>
        <Pagination pages={howManyPages} setCurrentPage={setCurrentPage} />
      </div>
    </div>
  );
};

export default CollectionLists;
