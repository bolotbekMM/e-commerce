import React from 'react';
import './InfoSection.css';
import { ReactComponent as MoneyIcon } from '../../../assets/images/money.svg';
import { ReactComponent as TrackIcon } from '../../../assets/images/truck.svg';
import { ReactComponent as EarIcon } from '../../../assets/images/ear.svg';
import { ReactComponent as ShopIcon } from '../../../assets/images/shop.svg';

const InfoSection = () => {
  return (
    <div className="main-container">
      <div className="last-box">
        <div>
          <h2>Наши преимущества</h2>
        </div>
        <div className="mini-boxes">
          <div className="box">
            <div className="divOfIcon">
              <MoneyIcon className="box-icon" />
            </div>
            <div className="divOfParagraph">
              <h4>Удобные способы оплаты</h4>
              <p>Мы предлагаем возможность безналичной оплаты</p>
            </div>
          </div>
          <div className="box">
            <div className="divOfIcon">
              <TrackIcon className="box-icon" />
            </div>
            <div className="divOfParagraph">
              <h4>Cвоевремнная доставка</h4>
              <p>
                100% гарантия возврата товара - 14 дней на возврат, без
                скандалов и истерик.
              </p>
            </div>
          </div>
          <div className="box">
            <div className="divOfIcon">
              <EarIcon className="box-icon" />
            </div>
            <div className="divOfParagraph">
              <h4>Профессиональная консультация</h4>
              <p>
                Мы проконсультируем и индивидуально подойдем к Вашему заказу
              </p>
            </div>
          </div>
          <div className="box">
            <div className="divOfIcon">
              <ShopIcon className="box-icon" />
            </div>
            <div className="divOfParagraph">
              <h4>Акции и бонусы для покупателей</h4>
              <p>
                Промокоды со скидками для постоянных клиентов, акции на новые
                позиции
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
