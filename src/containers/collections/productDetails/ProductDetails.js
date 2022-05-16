import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ProductDetailCard from './ProductDetailCard';
import ProductDetailImages from './ProductDetailImages';
import './ProductDetails.css';

const ProductDetails = () => {
  const params = useParams();
  const prodIdParam = +params.productDetails;
  const [productDetail, setproductDetail] = React.useState({});

  const productDet = useSelector((state) => state.products.items).find(
    (item) => item.id === prodIdParam
  );

  React.useEffect(() => {
    setproductDetail(productDet);
  }, [productDet]);

  return (
    <div className="main-boxDetail">
      <div>
        <ProductDetailImages details={productDetail} />
      </div>
      <div>
        <ProductDetailCard details={productDetail} />
      </div>
    </div>
  );
};

export default ProductDetails;
