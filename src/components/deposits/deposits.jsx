import React from 'react';


const Deposits = () => {
    return (
        <div className="deposits">
            <p className="deposits__title">Вклады Лига Банка – это выгодная инвестиция в свое будущее</p>
            <ul className="deposits__list">
                <li className="deposits__item">Проценты по вкладам до 7%</li>
                <li className="deposits__item">Разнообразные условия</li>
                <li className="deposits__item">Возможность ежемесячной капитализации или вывод процентов на банковскую карту</li>
            </ul>
            <a className="deposits__link" href="">Узнать подробнее</a>

        </div>
    );
  };
  
  export default Deposits;