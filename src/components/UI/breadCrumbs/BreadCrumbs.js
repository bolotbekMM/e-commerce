import React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { useLocation, useNavigate } from 'react-router-dom';
import './BreadCrumbs.css';

const Breadcrumbss = () => {
  const navigate = useNavigate();
  const pathname = useLocation();

  const pathnames = pathname.pathname.split('/').filter((x) => x);

  const breadcrumbNameMap = {
    collections: 'Коллекции',
    aboutUs: 'О Нас',
    leto: 'Лето 2020',
    news: 'Новости',
    favorites: 'Избранное',
    searchpage: 'Результаты поиска',
    help: 'Помощь',
  };
  return (
    <div className="breadcrumb">
      <Breadcrumbs aria-label="breadcrumb">
        {pathnames.length > 0 ? (
          <button className="navLink2" onClick={() => navigate('/')}>
            Главная
          </button>
        ) : (
          <p className="text2"> Главная </p>
        )}
        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;
          return isLast ? (
            <p className="text" key={name}>
              {breadcrumbNameMap[name]}
            </p>
          ) : (
            <button
              className="navLink"
              key={name}
              onClick={() => navigate(routeTo)}
            >
              {breadcrumbNameMap[name]}
            </button>
          );
        })}
      </Breadcrumbs>
    </div>
  );
};

export default Breadcrumbss;
