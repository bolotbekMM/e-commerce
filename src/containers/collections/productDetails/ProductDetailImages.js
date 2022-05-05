import React from 'react';
import './ProductDetails.css';

const ProductDetailImages = ({ details }) => {
  return (
    <div className="div-card-images">
      <div className="main-image-detail">
        <img
          className="images-of-details"
          src={details.url}
          alt="detail-image1"
        />
        <img
          className="images-of-details"
          src={details.url}
          alt="detail-image2"
        />
        <img
          className="images-of-details"
          src={details.url}
          alt="detail-image1"
        />
        <img
          className="images-of-details"
          src={details.url}
          alt="detail-image2"
        />
      </div>

      <div className="secondory-image-detail">
        <div>
          <img
            className="images-of-details-secondory"
            src={details.url}
            alt="detail-image1"
          />
        </div>
        <div>
          <img
            className="images-of-details-secondory"
            src={details.url}
            alt="detail-image1"
          />
        </div>
        <div>
          <img
            className="images-of-details-secondory"
            src={details.url}
            alt="detail-image2"
          />
        </div>
        <div>
          <img
            className="images-of-details-secondory"
            src={details.url}
            alt="detail-image1"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductDetailImages;
