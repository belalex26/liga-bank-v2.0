import React from 'react';


const Proposal = ({...props}) => {

  return (
      <div className="proposal">
          <p className="proposal__title">Наше предложение</p>
          <ul className="proposal__content">
              <li className="proposal__content-item">
                  <p className="proposal__price">1 330 000 рублей</p>
                  <p className="proposal__price-desc">Сумма ипотеки</p>
              </li>

              <li className="proposal__content-item">
                  <p className="proposal__persent">9,4%</p>
                  <p className="proposal__persen-desc">Процентная ставка</p>
              </li>

              <li className="proposal__content-item">
                  <p className="proposal__payment">27 868 рублей</p>
                  <p className="proposal__payment-desc">Ежемесячный платеж</p>
              </li>

              <li className="proposal__content-item">
                  <p className="proposal__payment">61 929 рублей</p>
                  <p className="proposal__payment-desc">Ежемесячный платеж</p>
              </li>
          </ul>
          <button className="proposal__btn" type="button">Оформить заявку</button>
      </div>
  );
};

export default Proposal;