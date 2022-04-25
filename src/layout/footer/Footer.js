import React from 'react';
import './Footer.css';
import { ReactComponent as Logo2 } from '../../assets/images/logowhite.svg';
import { ReactComponent as Phone } from '../../assets/images/telicon.svg';
import { ReactComponent as Instagram } from '../../assets/images/instagram.svg';
import { ReactComponent as Telegram } from '../../assets/images/telegram.svg';
import { ReactComponent as Mail } from '../../assets/images/mail.svg';
import { ReactComponent as Whatsapp } from '../../assets/images/whatsicon.svg';
import { Link, useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  const iconClickHandler = () => {
    navigate('/');
  };
  return (
    <div>
      <div className="footer">
        <div className="divOfLogoOuter">
          <div className="divOfLogoInner">
            <Logo2 role="presentation" onClick={iconClickHandler} />
          </div>
          <p className="logoP">Developed by Zeon 2022</p>
        </div>
        <div className="footer-text">
          <h3>Компания</h3>
          <div className="divOflist">
            <Link className="Link" to="/aboutUs">
              О нас
            </Link>
          </div>
          <div className="divOflist">
            <Link className="Link" to="/news">
              Новости
            </Link>
          </div>
          <div className="divOflist">
            <Link className="Link" to="/help">
              Помощь
            </Link>
          </div>
        </div>
        <div className="footer-text">
          <h3>Контакты</h3>
          <div className="divOflist">
            <Phone className="icons" />
            <a className="Link" href="tel:+996 500 123 456">
              +996 500 123 456
            </a>
          </div>
          <div className="divOflist">
            <Phone className="icons" />
            <a className="Link" href="tel:+996 500 123 456">
              +996 500 123 456
            </a>
          </div>
          <div className="divOflist">
            <Mail className="icons" />
            <Link className="Link" to="/">
              mail@gmail.com
            </Link>
          </div>
        </div>
        <div className="footer-text">
          <h3>Мы в социальных сетях:</h3>
          <div className="divOflist">
            <Instagram className="icons" />
            <a className="Link" href="https://www.instagram.com/zeon.ithub/">
              Instagram
            </a>
          </div>

          <div className="divOflist">
            <Telegram className="icons" />
            <a className="Link" href="https://telegram.org/">
              Telegram
            </a>
          </div>

          <div className="divOflist">
            <Whatsapp className="icons" />
            <a className="Link" href="https://www.whatsapp.com/?lang=ru">
              Whatsapp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
