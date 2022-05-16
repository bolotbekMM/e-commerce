import React from 'react';
import { getInfoSectionRequest, getLogoRequest } from '../../api/storeService';
import './Footer.css';
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

  const [logo, setLogo] = React.useState();
  const [telNumber, setTelNumber] = React.useState({});
  const [socialMedia, setSocialMedia] = React.useState({});

  const getLogo = async () => {
    try {
      const response = await getLogoRequest();
      setLogo(response.data.footerlogo);
    } catch (error) {
      console.log(error);
    }
  };

  const getTelNumber = async () => {
    try {
      const response = await getInfoSectionRequest();
      setTelNumber(response.data.telphones);
      setSocialMedia(response.data.socialmedia);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    getTelNumber();
    getLogo();
  }, []);
  return (
    <div>
      <div className="footer">
        <div className="divOfLogoOuter">
          <div className="divOfLogoInner">
            <img
              src={logo}
              role="presentation"
              onClick={iconClickHandler}
              alt="logo"
            />
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
            <a className="Link" href={`tel:${telNumber.phone1}`}>
              {telNumber.phone1}
            </a>
          </div>
          <div className="divOflist">
            <Phone className="icons" />
            <a className="Link" href={`tel:${telNumber.phone2}`}>
              {telNumber.phone2}
            </a>
          </div>
          <div className="divOflist">
            <Mail className="icons" />
            <a className="Link" href={`mailto:${socialMedia.mail}`}>
              {socialMedia.mail}
            </a>
          </div>
        </div>
        <div className="footer-text">
          <h3>Мы в социальных сетях:</h3>
          <div className="divOflist">
            <Instagram className="icons" />
            <a className="Link" href={socialMedia.insta}>
              Instagram
            </a>
          </div>

          <div className="divOflist">
            <Telegram className="icons" />
            <a className="Link" href={socialMedia.telegramm}>
              Telegram
            </a>
          </div>
          <div className="divOflist">
            <Whatsapp className="icons" />
            <a
              target="_blank"
              className="Link"
              href={socialMedia.whatsapp}
              rel="noreferrer"
            >
              Whatsapp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
