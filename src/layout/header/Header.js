import React from 'react';

import { ReactComponent as LikeIcon } from '../../assets/images/like.svg';
import { ReactComponent as CartIcon } from '../../assets/images/shoppingBag1.svg';
import { ReactComponent as DotIcon } from '../../assets/images/dot.svg';
import ScrollTopArrow from '../../assets/images/scroll-top-arrow.svg';
import MessageIcon from '../../assets/images/message-icon.svg';
import closeFixedButton from '../../assets/images/closeFixedButton.svg';
import telephone from '../../assets/images/telephone.svg';
import whatsapp from '../../assets/images/whatsapp.svg';
import telegram2 from '../../assets/images/telegram2.svg';

import { Link, useNavigate } from 'react-router-dom';
import './Header.css';

import SearchBar from '../../components/UI/searchInput/SearchBar.js';
import { getInfoSectionRequest, getLogoRequest } from '../../api/storeService';
import { useSelector } from 'react-redux';
import BackCall from './BackCall';
import SuccessForm from '../../containers/orderProduct/SuccessForm';

const Header = () => {
  const navigate = useNavigate();
  const [click, setClick] = React.useState(true);
  const [inputValue, setInputValue] = React.useState('');
  const [dotFavorite, setDotFavorite] = React.useState([]);
  const [logo, setLogo] = React.useState();
  const [telNumber, setTelNumber] = React.useState();

  const [floatButtonChange, setfloatButtonChange] = React.useState(true);

  const floatButtonChangeHundler = () => {
    setfloatButtonChange((prev) => !prev);
  };

  const scrollToTopFunc = () => {
    window.scrollTo(0, 0);
  };

  const [modalShow, setmodalShow] = React.useState(false);

  const [successModa, setsuccessModa] = React.useState(false);
  const showSuccessModal = () => {
    setsuccessModa(true);
    setmodalShow(false);
  };

  const hideSuccessModal = () => {
    setsuccessModa(false);
  };

  const getLogo = async () => {
    try {
      const response = await getLogoRequest();
      setLogo(response.data.headerlogo);
    } catch (error) {
      console.log(error);
    }
  };

  const [posts, setPosts] = React.useState([]);

  const cartItem = useSelector((state) => state.cart.cartItems);
  const favItem = useSelector((state) => state.favorites.favItems);
  const productData = useSelector((state) => state.products.items);

  React.useEffect(() => {
    setPosts(cartItem);
    setDotFavorite(favItem);
  }, [cartItem, favItem]);

  const [socialMedia, setSocialMedia] = React.useState({});

  const getTelNumber = async () => {
    try {
      const response = await getInfoSectionRequest();
      setTelNumber(response.data.telphones.mainPhone);
      setSocialMedia(response.data.socialmedia);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    getTelNumber();
    getLogo();
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
        {modalShow && (
          <BackCall
            setmodalShow={setmodalShow}
            showSuccessModal={showSuccessModal}
          />
        )}
        {!!successModa && <SuccessForm hideSuccessModal={hideSuccessModal} />}
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
          <span className="text-telphone">Тел: </span>
          <a className="tel-number" href="tel:+996000000000">
            {telNumber}
          </a>
        </div>
      </div>
      <div className="navbar-bottom">
        <div>
          <img
            role="presentation"
            src={logo}
            onClick={iconClickHandler}
            className="icon-logo"
            alt="logo"
          />
        </div>
        <div className="castom-input">
          <SearchBar productData={productData} />
        </div>
        <div className="favorit-cart">
          <Link to="/favorites" className="cart">
            <div className="divOfImages">
              <LikeIcon className="iconStyle" />
              {dotFavorite.length > 0 && <DotIcon className="dotIcon" />}
            </div>
            Избранное
          </Link>
          <div className="div-of-button">
            <Link to="/cart" className="cart">
              <div className="divOfImages">
                <CartIcon className="iconStyle" />
                {posts.length > 0 && <DotIcon className="dotIcon" />}
              </div>
              Корзина
            </Link>
          </div>
          <div>
            <div className="float-buttons-div1">
              <img
                onClick={scrollToTopFunc}
                className="scroll-top-arrow"
                src={ScrollTopArrow}
                alt="scroll-top-arrow"
              />
            </div>
            <div className="float-buttons-div2">
              {!!floatButtonChange ? (
                <img
                  role="presentation"
                  onClick={floatButtonChangeHundler}
                  className="MessageIcon"
                  src={MessageIcon}
                  alt="MessageIcon"
                />
              ) : (
                <>
                  <img
                    role="presentation"
                    onClick={floatButtonChangeHundler}
                    className="closeIcon"
                    src={closeFixedButton}
                    alt="closeFixedButton"
                  />
                  <img
                    role="presentation"
                    onClick={() => setmodalShow((prev) => !prev)}
                    className="telephone"
                    src={telephone}
                    alt="telephone"
                  />
                  <a href={socialMedia.whatsapp}>
                    <img
                      role="presentation"
                      // onClick={floatButtonChangeHundler}
                      className="whatsapp"
                      src={whatsapp}
                      alt="whatsapp"
                    />
                  </a>
                  <a href={socialMedia.telegramm}>
                    <img
                      role="presentation"
                      // onClick={floatButtonChangeHundler}
                      className="telegram2"
                      src={telegram2}
                      alt="telegram2"
                    />
                  </a>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
