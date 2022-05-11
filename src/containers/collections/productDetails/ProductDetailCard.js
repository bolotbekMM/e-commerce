import React from 'react';
import './ProductDetails.css';
import shopBugIcon from '../../../assets/images/ShopBugIconToButton.svg';
import heardIconDetail from '../../../assets/images/HeardToFavButton.svg';
import heardIconDetail2 from '../../../assets/images/whitewhiteheart.svg';

import { useDispatch, useSelector } from 'react-redux';
import { cartAction, favoriteAction } from '../../../store';
import { useNavigate } from 'react-router-dom';
// import ProductDetailColor from './ProductDetailColor';

const ProductDetailCard = (props) => {
  const { details } = props;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const favoriteItems = useSelector((state) => state.favorites.favItems);

  const serchFevItem = favoriteItems.find((item) => item.id === details.id);

  const [buttonChange, setButtonChange] = React.useState(true);

  const [prodToCart, setprodToCart] = React.useState({});

  const handleAddToFav = (item) => {
    dispatch(favoriteAction.addToFavorite(item));
  };

  const handleRemoveFromFav = (item) => {
    dispatch(favoriteAction.removeFromFavorite(item));
  };

  const handleAddToCart = () => {
    if (!prodToCart.color) {
      alert('Select color');
    } else {
      dispatch(cartAction.addToCart(prodToCart));
      setButtonChange((prev) => !prev);
    }
  };

  const handleGoToCart = () => {
    navigate('/cart');
    setButtonChange((prev) => !prev);
  };

  const chdetails = { ...details };

  const selectColor = (c) => {
    chdetails.color = c;
    chdetails.colorId = Math.random();

    setprodToCart(chdetails);
  };

  function ucFirst(str) {
    if (!str) return str;
    return str[0].toUpperCase() + str.slice(1);
  }
  return (
    <div className="div-card-detail">
      <h2 className="header-title">{ucFirst(details?.name)}</h2>
      <div>
        <p className="articul-cvet">
          Артикул: <span>{details?.articul}</span>
        </p>
        <div>
          <div className="articul-cvet">
            Цвет:
            <div className="colors-section1">
              {details?.colors &&
                details?.colors.map((color, index) => {
                  // <ProductDetailColor key={index} color={color} />;
                  return (
                    <div
                      key={index}
                      style={{ backgroundColor: `${color}` }}
                      onClick={() => selectColor(color)}
                      className="dot-div1"
                    ></div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>

      <h3 className="prod-price">
        {!!details?.oldprice ? details?.oldprice : details?.newprice} р
        {!!details?.oldprice ? <span>{details?.newprice} р</span> : ''}
      </h3>
      <div>
        <p className="otovare">О товаре:</p>
      </div>
      <span className="opisanie">{details?.productDescribtion}</span>
      <div className="bottom-describe-div">
        <p>
          Размерный ряд:
          <span>{`${details?.sizemin}-${details?.sizemax}`}</span>
        </p>
        <p>
          Количество в линейке :<span>{details?.quantityinline}</span>
        </p>
        <p>
          Состав ткани:<span>{details?.fabricstructure}</span>
        </p>
        <p>
          Материал:<span>{details?.material}</span>
        </p>
      </div>
      <div className="div-of-cart-button">
        {!!buttonChange && (
          <button
            onClick={() => handleAddToCart(details)}
            className="add-to-cart-button"
          >
            <img
              className="shopBugIcon-detail"
              src={shopBugIcon}
              alt="shop-bug"
            />
            Добавить в корзину
          </button>
        )}
        {!buttonChange && (
          <button onClick={handleGoToCart} className="add-to-cart-button">
            <img
              className="shopBugIcon-detail"
              src={shopBugIcon}
              alt="shop-bug"
            />
            Перейти в корзину
          </button>
        )}
        {!serchFevItem && (
          <button
            onClick={() => handleAddToFav(details)}
            className="add-to-fav-button"
          >
            <img
              className="heardIcon-detail"
              src={heardIconDetail}
              alt="heardIconDetail"
            />
          </button>
        )}
        {!!serchFevItem && (
          <button
            onClick={() => handleRemoveFromFav(details)}
            className="add-to-fav-button"
          >
            <img
              className="heardIcon-detail"
              src={heardIconDetail2}
              alt="heardIconDetail"
            />
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductDetailCard;
