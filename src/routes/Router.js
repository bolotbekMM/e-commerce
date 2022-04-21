import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Collections from '../containers/Collections';
import SearchPage from '../containers/SearchPage';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<p>Главная </p>} />
      <Route path="/aboutUs" element={<p>О нас</p>} />
      <Route path="/collections" element={<Collections />} />
      <Route path="/collections/leto" element={<p>Лето 2020 </p>} />
      <Route path="/news" element={<p>Новости </p>} />
      <Route path="/favorites" element={<p>Избранное </p>} />
      <Route path="/cart" element={<p>Корзина </p>} />
      <Route path="/searchpage" element={<SearchPage />} />
    </Routes>
  );
};

export default Router;
