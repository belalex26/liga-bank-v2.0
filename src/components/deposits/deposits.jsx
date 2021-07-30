import React from 'react';
import { Link } from 'react-router-dom';

const Deposits = () => {
    return (
        <div className="deposits">
            <div className="deposits__container">
                <p className="deposits__title">Вклады Лига Банка – это выгодная инвестиция в свое будущее</p>
                <ul className="deposits__list">
                    <li className="deposits__item">Проценты по вкладам до 7%</li>
                    <li className="deposits__item">Разнообразные условия</li>
                    <li className="deposits__item">Возможность ежемесячной капитализации или вывод процентов на банковскую карту</li>
                </ul>
                <Link className="deposits__link" to="/deposit">Узнать подробнее</Link>
            </div>
        </div>
    );
  };
  
  export default Deposits;