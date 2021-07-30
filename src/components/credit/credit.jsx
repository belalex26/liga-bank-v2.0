import React from 'react';

const Credit = () => {
    return (
        <div className="credit">
            <div className="credit__container">
                <p className="credit__title">Лига Банк выдает кредиты под любые цели</p>
                <ul className="credit__list">
                    <li className="credit__item">Ипотечный кредит</li>
                    <li className="credit__item">Автокредит</li>
                    <li className="credit__item">Потребительский кредит</li>
                </ul>
                <p className="credit__text">Рассчитайте ежемесячный платеж и ставку по кредиту воспользовавшись нашим 
                    <a className="credit__link" href="#credit">кредитным калькулятором</a>
                </p>
            </div>
        </div>
    );
  };
  
  export default Credit;