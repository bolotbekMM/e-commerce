import React from 'react';
import { useParams } from 'react-router-dom';
import { getCollectionRequest } from '../../../api/storeService';
import ProductDetailCard from './ProductDetailCard';
import ProductDetailImages from './ProductDetailImages';
import './ProductDetails.css';

const ProductDetails = () => {
  const params = useParams();
  const idOfCollection = +params.product;
  const prodDetails = +params.productDetails;

  const [details, setdetails] = React.useState([]);

  const getCollection = async () => {
    try {
      const response = await getCollectionRequest();
      await setdetails(
        response.data
          .filter((item) => item.id === idOfCollection)[0]
          .products.filter((items) => items.id === prodDetails)[0]
      );
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    getCollection();
  }, []);
  console.log(details.colors, '111details');

  return (
    <div className="main-boxDetail">
      <div>
        <ProductDetailImages details={details} />
      </div>
      <div>
        <ProductDetailCard details={details} />
      </div>
    </div>
  );
};

export default ProductDetails;
