import React from 'react';
import './Collections.css';
import CollectionItem from './CollectionItem';
import Pagination from './Pagination';
import { getCollectionRequest } from '../../api/storeService';

const Collections = () => {
  const [posts, setPosts] = React.useState([]);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [postsPerPage] = React.useState(8);

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

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const howManyPages = Math.ceil(posts.length / postsPerPage);

  return (
    <div className="main-container">
      <div className="divOfHeader-page">
        <h3 className="divOfHeader-h3">Коллекция</h3>
      </div>
      <ul className="big-box">
        {currentPosts.map((item) => {
          return <CollectionItem key={item.id} item={item} />;
        })}
      </ul>
      <div>
        <Pagination pages={howManyPages} setCurrentPage={setCurrentPage} />
      </div>
    </div>
  );
};

export default Collections;
