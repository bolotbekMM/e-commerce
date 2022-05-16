import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SuccessIcon from '../../assets/images/successIcon.svg';
import Modal2 from '../../components/UI/modal/Modal2';
import './SuccessForm.css';

const SuccessForm = ({ hideSuccessModal }) => {
  const navigate = useNavigate();
  const buttonClickHandlerr = () => {
    hideSuccessModal();
    navigate('/');
  };
  return (
    <Modal2 hideSuccessModal={hideSuccessModal}>
      <div className="success-form-container">
        <img className="success-icon" src={SuccessIcon} alt="success-icon" />
        <span className="success-form-title">Спасибо!</span>
        <span className="success-form-text">
          Ваша заявка была принята ожидайте, скоро Вам перезвонят
        </span>
        <button onClick={buttonClickHandlerr} className="sssuccess-form-button">
          Продолжить покупки
        </button>
      </div>
    </Modal2>
  );
};

export default SuccessForm;
