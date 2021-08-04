import React from 'react';
import {Link} from 'react-router-dom';

const Insurance = () => {
  return (
    <div className="insurance">
      <div className="insurance__container">
        <p className="insurance__title">Лига Страхование — застрахуем все что захотите</p>
        <ul className="insurance__list">
          <li className="insurance__item">Автомобильное страхование</li>
          <li className="insurance__item">Страхование жизни и здоровья</li>
          <li className="insurance__item">Страхование недвижимости</li>
        </ul>
        <Link className="insurance__link" to="/insurance">Узнать подробнее</Link>
      </div>
    </div>
  );
};

export default Insurance;
