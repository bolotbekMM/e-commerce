import React from 'react';
import OrederProduct from '../orderProduct/OrederProduct';
import SuccessForm from '../orderProduct/SuccessForm';

const CartShopTotalItems = ({ posts }) => {
  const totlalQuantityLine = posts.map((item) => item.cartQuantity);

  const count = (arr) => arr.reduce((acc, num) => acc + num, 0);

  const totalQuantityProducts = posts.map(
    (item) => item.cartQuantity * item.quantityinline
  );
  const totalPrice = posts.map((item) => item.cartQuantity * item.newprice);

  const discount = posts.map(
    (item) =>
      item.cartQuantity * (!!item.oldprice ? item.newprice - item.oldprice : '')
  );

  const priceAfterDiscount = posts.map(
    (item) =>
      item.cartQuantity * (!!item.oldprice ? item.oldprice : item.newprice)
  );

  const [modalShow, setmodalShow] = React.useState(false);

  const showModalHandler = () => {
    setmodalShow(true);
  };

  const hideModalHandler = () => {
    setmodalShow(false);
  };

  const [successModa, setsuccessModa] = React.useState(false);
  const showSuccessModal = () => {
    setsuccessModa(true);
    setmodalShow(false);
  };

  const hideSuccessModal = () => {
    setsuccessModa(false);
  };

  return (
    <div className="cart-shop-total-item-div">
      <h3>Сумма заказа</h3>
      <div className="cart-shop-total-item-div-div">
        {!!modalShow && posts && (
          <OrederProduct
            onCloseModal={hideModalHandler}
            showSuccessModal={showSuccessModal}
          />
        )}
        {!!successModa && <SuccessForm hideSuccessModal={hideSuccessModal} />}

        <div className="cart-shop-total-item-inner-div">
          <span className="cart-shop-total-p ">Количество линеек:</span>
          <span className="cart-shop-total-span">
            {count(totlalQuantityLine)} шт
          </span>
        </div>

        <div className="cart-shop-total-item-inner-div">
          <span className="cart-shop-total-p ">Количество товаров:</span>
          <span className="cart-shop-total-span">
            {count(totalQuantityProducts)} шт
          </span>
        </div>

        <div className="cart-shop-total-item-inner-div">
          <span className="cart-shop-total-p ">Стоимость:</span>
          <span className="cart-shop-total-span">
            {count(totalPrice).toLocaleString()} рублей
          </span>
        </div>

        <div className="cart-shop-total-item-inner-div">
          <span className="cart-shop-total-p ">Скидка:</span>
          <span className="cart-shop-total-span">
            {count(discount).toLocaleString()} рублей
          </span>
        </div>
      </div>

      <div className="cart-shop-total-item-inner-div">
        <span className="cart-shop-total-p ">Итого к оплате:</span>
        <span className="cart-shop-total-span">
          {count(priceAfterDiscount).toLocaleString()} рублей
        </span>
      </div>
      <div>
        <button onClick={showModalHandler} className="cart-ofer-button">
          Оформить заказ
        </button>
      </div>
    </div>
  );
};

export default CartShopTotalItems;
