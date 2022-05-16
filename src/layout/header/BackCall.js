import React from 'react';
import Modal from '../../components/UI/modal/Modal';
import close from '../../assets/images/close-icon.svg';
// import man from '../../assets/images/man.svg';
// import tel from '../../assets/images/tel.svg';

import './BackCall.css';
import { getInfoSectionRequest } from '../../api/storeService';

const BackCall = ({ setmodalShow, showSuccessModal }) => {
  const [name, setname] = React.useState('');

  const [telnumber, settelnumber] = React.useState('');

  const nameChangeHundler = (e) => {
    setname(e.target.value);
  };

  const telnumberChangeHundler = (e) => {
    settelnumber(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <Modal setmodalShow={setmodalShow}>
      <div className="main-container-backcall">
        <div className="backcall-div">
          <img
            role="presentation"
            onClick={() => setmodalShow((prev) => !prev)}
            className="backcall-icon"
            src={close}
            alt="closeButton"
          />
          <span className="backcall-title">Если у Вас остались вопросы</span>
          <span className="backcall-text">
            Оставьте заявку и мы обязательно Вам перезвоним
          </span>
        </div>
        <form onSubmit={submitHandler} className="backcall-form">
          <input
            value={name}
            onChange={nameChangeHundler}
            placeholder="Как к Вам обращаться?"
            className="backcall-input"
          >
            {/* <img className="backcall-man-icon" src={man} alt="man-icon" /> */}
          </input>
          <input
            type="number"
            value={telnumber}
            onChange={telnumberChangeHundler}
            placeholder="Номер телефона"
            className="backcall-input"
          >
            {/* <img className="backcall-man-icon" src={tel} alt="tel-icon" /> */}
          </input>
          {!!name && !!telnumber ? (
            <button
              className="backcall-footer-button"
              onClick={() => showSuccessModal()}
            >
              Заказать звонок
            </button>
          ) : (
            <button type="button" className="backcall-footer-button-default">
              Заказать звонок
            </button>
          )}
        </form>
      </div>
    </Modal>
  );
};

export default BackCall;
