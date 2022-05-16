import React from 'react';
import { getPublicOffertRequest } from '../../../api/storeService';
import '../../MainPage/sections/Bestseller.css';

const PublicOffer = () => {
  const [posts, setPosts] = React.useState([]);

  const getPublicOffer = async () => {
    try {
      const response = await getPublicOffertRequest();
      setPosts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    getPublicOffer();
  }, []);

  console.log(posts, 'posts');

  return (
    <div className="main-containerr">
      <div className="divOfHeader-page">
        <h3 className="bestseller-title">Публичная оферта</h3>
      </div>
      <div className="publicOffer-div">
        <p className="publicOffer-text">{posts}</p>
        <p className="publicOffer-text">{posts}</p>
        <p className="publicOffer-text">{posts}</p>
        <p className="publicOffer-text">{posts}</p>
        <p className="publicOffer-text">{posts}</p>
        <p className="publicOffer-text">{posts}</p>
        <p className="publicOffer-text">{posts}</p>
        <p className="publicOffer-text">{posts}</p>
      </div>
    </div>
  );
};

export default PublicOffer;
