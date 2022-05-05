import React from 'react';

import './GallerySection.css';
import { getGalleryImagesRequest } from '../../../api/storeService';

const GallerySection = () => {
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  const [imagesss, setImagesss] = React.useState([]);

  const getGalleryImages = async () => {
    try {
      const response = await getGalleryImagesRequest();
      setImagesss(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    getGalleryImages();
  }, []);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === imagesss.length - 1 ? 0 : prevIndex + 1
        ),
      4000
    );

    return () => {
      resetTimeout();
    };
  }, [index]);
  return (
    <div className="main-container">
      <div className="slideshow">
        <div
          className="slideshowSlider"
          style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
        >
          {imagesss.map((image, index) => (
            <div
              className="slide"
              key={index}
              style={{ backgroundImage: `url(${image})` }}
            ></div>
          ))}
        </div>

        <div className="slideshowDots">
          {imagesss.map((_, idx) => (
            <div
              key={idx}
              className={`slideshowDot${index === idx ? ' activeee' : ''}`}
              onClick={() => {
                setIndex(idx);
              }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GallerySection;
