import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Collections from '../containers/Collections';
import MainPage from '../containers/MainPage/MainPage';
import SearchPage from '../containers/SearchPage';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/aboutUs" element={<p>О нас</p>} />
      <Route path="/collections" element={<Collections />} />
      <Route path="/collections/leto" element={<p>Лето 2020 </p>} />
      <Route path="/news" element={<p>Новости </p>} />
      <Route path="/favorites" element={<p>Избранное </p>} />
      <Route path="/cart" element={<p>Корзина </p>} />
      <Route path="/searchpage" element={<SearchPage />} />
      <Route path="/help" element={<p>Помощь </p>} />
    </Routes>
  );
};

export default Router;
