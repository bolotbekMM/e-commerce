import React from 'react';

import { ReactComponent as Logo } from '../../assets/images/logo.svg';
import { ReactComponent as LikeIcon } from '../../assets/images/like.svg';
import { ReactComponent as CartIcon } from '../../assets/images/shoppingBag1.svg';
import { ReactComponent as DotIcon } from '../../assets/images/dot.svg';

import { Link, useNavigate } from 'react-router-dom';
import './Header.css';

import SearchInput from '../../components/UI/searchInput/SearchInput';

const Header = () => {
  const navigate = useNavigate();
  const [click, setClick] = React.useState(true);
  const [inputValue, setInputValue] = React.useState('');
  const [dotNotificationFavorite, setDotNotificationFavorite] =
    React.useState(Boolean);
  const [dotNotificationCart, setDotNotificationCart] = React.useState(Boolean);

  React.useEffect(() => {
    setDotNotificationFavorite(true);
    setDotNotificationCart(true);
  }, []);

  const inputChangeHandler = (e) => {
    setInputValue(e.target.value);
  };

  const iconClickHandler = () => {
    navigate('/');
  };

  return (
    <nav className="navbar">
      <div className="navbar-top">
        <div>
          <ul className={click ? 'nav-ul' : 'nav-menu-mobile'}>
            <li className="nav-li">
              <Link to="/aboutUs" className="nav-links">
                О нас
              </Link>
            </li>
            <li className="nav-li">
              <Link to="/collections" className="nav-links">
                Коллекции
              </Link>
            </li>
            <li className="nav-li">
              <Link to="/news" className="nav-links">
                Новости
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <span className="text-telphone">tel: </span>
          <button className="tel-number">+996 000 000 000</button>
        </div>
      </div>
      <div className="navbar-bottom">
        <div>
          <Logo onClick={iconClickHandler} className="icon-logo" />
        </div>
        <div className="castom-input">
          <SearchInput
            inputValue={inputValue}
            inputChangeHandler={inputChangeHandler}
          />
        </div>
        <div className="favorit-cart">
          <Link to="/favorites" className="cart">
            <div className="divOfImages">
              <LikeIcon
                className="iconStyle"
                onClick={() => {
                  setDotNotificationFavorite((prev) => !prev);
                }}
              />
              {dotNotificationFavorite && <DotIcon className="dotIcon" />}
            </div>
            Избранное
          </Link>
          <div className="div-of-button">
            <Link to="/cart" className="cart">
              <div className="divOfImages">
                <CartIcon className="iconStyle" />
                {dotNotificationCart && <DotIcon className="dotIcon" />}
              </div>
              Корзина
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
