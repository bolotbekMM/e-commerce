import React from 'react';
import './MainPage.css';
import Bestseller from './sections/Bestseller';
import Collections from './sections/Collections';
import GallerySection from './sections/GallerySection';
import InfoSection from './sections/InfoSection';
import NewProducts from './sections/NewProducts';

const MainPage = () => {
  return (
    <div>
      <GallerySection />
      <Bestseller />
      <NewProducts />
      <Collections />
      <InfoSection />
    </div>
  );
};

export default MainPage;
