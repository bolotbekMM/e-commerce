import React from 'react';
import './ProductDetails.css';

const ProductDetailImages = ({ details }) => {
  return (
    <div className="div-card-images">
      <div className="main-image-detail">
        <img
          className="images-of-details"
          src={details.url ? details.url : ''}
          alt="detail-image1"
        />
        {details.url ? (
          <img
            className="images-of-details"
            src={details.url2 ? details.url2 : details.url}
            alt="detail-image2"
          />
        ) : (
          ''
        )}
        {details.url ? (
          <img
            className="images-of-details"
            src={details.url3 ? details.url3 : details.url}
            alt="detail-image1"
          />
        ) : (
          ''
        )}
        {details.url ? (
          <img
            className="images-of-details"
            src={details.url4 ? details.url4 : details.url}
            alt="detail-image2"
          />
        ) : (
          ''
        )}
      </div>
      {details.url ? (
        <div className="secondory-image-detail">
          <div>
            <img
              className="images-of-details-secondory"
              src={details.url5 ? details.url5 : details.url}
              alt="detail-image1"
            />
          </div>
          <div>
            <img
              className="images-of-details-secondory"
              src={details.url6 ? details.url6 : details.url}
              alt="detail-image1"
            />
          </div>
          <div>
            <img
              className="images-of-details-secondory"
              src={details.url7 ? details.url7 : details.url}
              alt="detail-image2"
            />
          </div>
          <div>
            <img
              className="images-of-details-secondory"
              src={details.url8 ? details.url8 : details.url}
              alt="detail-image1"
            />
          </div>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export default ProductDetailImages;
