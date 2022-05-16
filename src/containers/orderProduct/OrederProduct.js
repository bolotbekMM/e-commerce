import React, { useState } from 'react';
import './OrdereProduct.css';
import { Link } from 'react-router-dom';
import close from '../../assets/images/close-icon.svg';
import CheckBox from '../../components/UI/checkBox/CheckBox';
import Modal from '../../components/UI/modal/Modal';
import { useDispatch } from 'react-redux';
import { cartAction } from '../../store';

const OrederProduct = ({ onCloseModal, showSuccessModal }) => {
  const [name, setname] = useState('');
  const [surname, setsurname] = useState('');
  const [email, setemail] = useState('');
  const [telnumber, settelnumber] = useState('');
  const [country, setcountry] = useState('');
  const [city, setcity] = useState('');

  const surnameChangeHundler = (e) => {
    setsurname(e.target.value);
  };

  const nameChangeHundler = (e) => {
    setname(e.target.value);
  };

  const emailChangeHundler = (e) => {
    setemail(e.target.value);
  };

  const telnumberChangeHundler = (e) => {
    settelnumber(e.target.value);
  };

  const countryChangeHundler = (e) => {
    setcountry(e.target.value);
  };

  const cityChangeHundler = (e) => {
    setcity(e.target.value);
  };

  const [check, setChekc] = useState(false);

  const onChangeChakedHundler = () => {
    setChekc((prev) => !prev);
  };
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    showSuccessModal();
    e.preventDefault();
    dispatch(cartAction.clearCart());
  };

  return (
    <Modal onCloseModal={onCloseModal}>
      <form>
        <div className="order-container">
          <div className="order-container-header">
            <div className="order-container-header-title">
              <h3>Оформление заказа</h3>
            </div>
            <div className="order-container-header-icon">
              <img
                onClick={onCloseModal}
                role="presentation"
                src={close}
                alt="close-icon"
              />
            </div>
          </div>
          <div className="order-container-body">
            <div className="order-container-body-input-div">
              <label>Ваше имя</label>
              <input
                value={name}
                onChange={nameChangeHundler}
                type="text"
                placeholder="Например Иван"
              ></input>
            </div>
            <div className="order-container-body-input-div">
              <label>Ваше фамилия</label>
              <input
                value={surname}
                onChange={surnameChangeHundler}
                type="text"
                placeholder="Например Иванов"
              ></input>
            </div>
            <div className="order-container-body-input-div">
              <label>Электронная почта</label>
              <input
                value={email}
                onChange={emailChangeHundler}
                type="text"
                placeholder="example@mail.com"
              ></input>
            </div>
            <div className="order-container-body-input-div">
              <label>Ваш номер телефона</label>
              <input
                value={telnumber}
                onChange={telnumberChangeHundler}
                type="number"
                placeholder="Введите номер телефона"
              ></input>
            </div>
            <div className="order-container-body-input-div">
              <label>Страна</label>
              <input
                value={country}
                onChange={countryChangeHundler}
                type="text"
                placeholder="Введите страну"
              ></input>
            </div>
            <div className="order-container-body-input-div">
              <label>Город</label>
              <input
                value={city}
                onChange={cityChangeHundler}
                type="text"
                placeholder="Введите город"
              ></input>
            </div>
          </div>

          <div className="order-container-footer">
            <div className="order-container-footer-first-part">
              <div style={{ padding: '0px', margin: '0px' }}>
                <CheckBox checked={check} onChange={onChangeChakedHundler} />
              </div>
              <div>
                <span>Согласен с условиями </span>
                <Link to={'/offert'}>
                  <span style={{ color: '#081bbd' }}>публичной оферты</span>
                </Link>
              </div>
            </div>
            <div className="order-container-footer-second-part">
              {!!name &&
              !!surname &&
              !!email &&
              !!telnumber &&
              !!country &&
              !!city &&
              !!check ? (
                <button
                  type="button"
                  className="order-container-footer-second-part-button"
                  onClick={submitHandler}
                >
                  Заказать
                </button>
              ) : (
                <button
                  type="button"
                  className="order-container-footer-second-part-button-default"
                  // onClick={submitHandler}
                >
                  Заказать
                </button>
              )}
            </div>
          </div>
        </div>
      </form>
    </Modal>
  );
};

export default OrederProduct;
