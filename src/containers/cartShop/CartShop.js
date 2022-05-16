import React from 'react';
import { useSelector } from 'react-redux';
import InterestedProductItems from '../interestedProducts/InterestedProductsItems';
import './CartShop.css';
import CartShopItems from './CartShopItems';
import CartShopTotalItems from './CartShopTotalItems';

const CartShop = () => {
  const [posts, setPosts] = React.useState([]);
  const [count] = React.useState(5);
  const [interestedProd, setinterestedProd] = React.useState([]);

  const cartItem = useSelector((state) => state.cart.cartItems);
  const interestedItem = useSelector((state) => state.products.items);
  const interstedProd = interestedItem.filter((item) => item?.oldprice);

  React.useEffect(() => {
    setPosts(cartItem);
    setinterestedProd(interstedProd);
  }, [cartItem, interestedItem]);

  return (
    <div className="main-container">
      <>
        <div>
          <h5 className="cart-shop-title">Корзина</h5>
          {posts.length === 0 && (
            <div className="cart-shop-empty-text">
              <span>У Вас пока нет товаров в корзине</span>
            </div>
          )}
        </div>
        {posts.length > 0 && (
          <div className="div-of-cart-page">
            <div className="div-of-cart-items">
              {posts.map((item) => (
                <CartShopItems key={item.id} item={item} />
              ))}
            </div>
            <div className="div-of-cart-total-count">
              <CartShopTotalItems posts={posts} />
            </div>
          </div>
        )}
        {posts.length === 0 && (
          <>
            <div>
              <h3 className="bestseller-title-int">
                Возможно Вас заинтересует
              </h3>
            </div>
            <div className="big-box-int">
              {interestedProd.slice(0, count).map((item) => {
                return <InterestedProductItems key={item.id} item={item} />;
              })}
            </div>
          </>
        )}
      </>
    </div>
  );
};

export default CartShop;
