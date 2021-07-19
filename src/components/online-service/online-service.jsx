import React from 'react';


const OnlineService = () => {
    return (
        <div className="online-service">
            <p className="online-service__title">Лига Банк — это огромное количество онлайн-сервисов для вашего удобства</p>
            <ul className="online-service__list">
                <li className="online-service__item">
                    <span>Мобильный банк,</span>
                который всегда под рукой</li>
                <li className="online-service__item">Приложение Лига-проездной позволит вам оплачивать билеты по всему миру</li>
            </ul>
            <a className="online-service__link" href="">Узнать подробнее</a>

        </div>
    );
  };
  
  export default OnlineService;