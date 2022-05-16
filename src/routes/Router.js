import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AboutUs from '../containers/aboutUs/AboutUs';
import CartShop from '../containers/cartShop/CartShop';
import CollectionLists from '../containers/collections/collectionListPage/CollectionLists';
import Collections from '../containers/collections/Collections';
import ProductDetails from '../containers/collections/productDetails/ProductDetails';
import PublicOffer from '../containers/collections/publicOffer/PublicOffer';
import Favorites from '../containers/favorites/Favorites';
import Help from '../containers/help/Help';
import MainPage from '../containers/MainPage/MainPage';
import News from '../containers/news/News';
import OrederProduct from '../containers/orderProduct/OrederProduct';
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
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/cart" element={<CartShop />} />
      <Route path="/searchpage" element={<SearchPage />} />
      <Route path="/searchpage/:searchItem" element={<SearchPage />} />

      <Route path="/help" element={<Help />} />
      <Route path="/cart/orderProducts" element={<OrederProduct />} />
      <Route path="/offert" element={<PublicOffer />} />
    </Routes>
  );
};

export default Router;
