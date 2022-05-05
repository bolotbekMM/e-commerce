import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AboutUs from '../containers/aboutUs/AboutUs';
import CollectionLists from '../containers/collections/collectionListPage/CollectionLists';
import Collections from '../containers/collections/Collections';
import ProductDetails from '../containers/collections/productDetails/ProductDetails';
import Help from '../containers/help/Help';
import MainPage from '../containers/MainPage/MainPage';
import News from '../containers/news/News';
import SearchPage from '../containers/SearchPage';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/aboutUs" element={<AboutUs />} />
      <Route path="/collections" element={<Collections />} />
      <Route path="/collections/:product" element={<CollectionLists />} />
      <Route path="/news" element={<News />} />
      <Route
        path="/collections/:product/:productDetails"
        element={<ProductDetails />}
      />
      <Route path="/:productDetails" element={<ProductDetails />} />
      <Route path="/cart" element={<p>Корзина </p>} />
      <Route path="/searchpage" element={<SearchPage />} />
      <Route path="/help" element={<Help />} />
    </Routes>
  );
};

export default Router;
