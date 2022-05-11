import React from 'react';

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

  return (
    <div className="cart-shop-total-item-div">
      <h3>Сумма заказа</h3>
      <div className="cart-shop-total-item-div-div">
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
            {count(totalPrice)} рублей
          </span>
        </div>

        <div className="cart-shop-total-item-inner-div">
          <span className="cart-shop-total-p ">Скидка:</span>
          <span className="cart-shop-total-span">{count(discount)} рублей</span>
        </div>
      </div>

      <div className="cart-shop-total-item-inner-div">
        <span className="cart-shop-total-p ">Итого к оплате:</span>
        <span className="cart-shop-total-span">
          {count(priceAfterDiscount)} рублей
        </span>
      </div>
      <div>
        <button className="cart-ofer-button">Оформить заказ</button>
      </div>
    </div>
  );
};

export default CartShopTotalItems;
