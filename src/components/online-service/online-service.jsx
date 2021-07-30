import React from 'react';
import { Link } from 'react-router-dom';

const OnlineService = () => {
    return (
        <div className="online-service">
            <div className="online-service__container">
                <p className="online-service__title">Лига Банк — это огромное количество онлайн-сервисов для вашего удобства</p>
                <ul className="online-service__list">
                    <li className="online-service__item">
                        <span>Мобильный банк,</span> который всегда под рукой
                    </li>
                    <li className="online-service__item">Приложение Лига-проездной позволит вам оплачивать билеты по всему миру</li>
                </ul>
                <Link className="online-service__link" to="/online">Узнать подробнее</Link>
            </div>
        </div>
    );
  };
  
  export default OnlineService;