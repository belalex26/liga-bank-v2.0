import React from 'react';
import PropTypes from 'prop-types';

import CalculatorQuestionnaire from '../calculator-questionnaire/calculator-questionnaire';

const Proposal = ({...props}) => {
  const MATERNITY_CAPITAL = 470000;
  const PERSENT_LIMIT = 15;
  let credit = props.credit;
  let percent = 9.40;
  let interestRate = 0.00783;
  let period = props.time * 12;
  let payment = 0;

  const renderPriceIfTagret = () => {
    if (props.target === `Ипотечное кредитование`) {
      return (`Сумма ипотеки`);
    }
    return (`Сумма автокредита`);
  };

  const getRenderPrice = () => {

    if (props.target === `Ипотечное кредитование`) {

      if (props.capital) {
        return (
          credit = credit - MATERNITY_CAPITAL
        );
      }
      return (
        credit
      );

    }
    return (
      credit
    );

  };

  if (props.target === `Ипотечное кредитование`) {

    if (props.contribution >= PERSENT_LIMIT) {
      percent = 8.50;
    }
  } else {

    if (props.lifeInsurance && props.carInsurance) {
      percent = 3.5;
    } else if (props.lifeInsurance || props.carInsurance) {
      percent = 8.5;
    } else if (props.credit >= 2000000) {
      percent = 15;
    } else {
      percent = 16;
    }
  }

  interestRate = (percent * 0.01) / 12;

  const getRenderPayment = () => {
    let priseCost = (1 + interestRate) ^ period;
    payment = Math.ceil(credit * (interestRate + (interestRate / (priseCost - 1))));

    return (payment);
  };

  const getRenderProfit = () => {
    let profit = Math.ceil((payment * 100) / 45);
    return (profit);
  };

  const onButtonClick = () => {
    props.onQuestionnaireActive(true);
  };

  return (
    <>
      <div className="proposal">
        <p className="proposal__title">Наше предложение</p>
        <ul className="proposal__content">
          <li className="proposal__content-item">
            <p className="proposal__content-value">{`${getRenderPrice()} рублей`}</p>
            <p className="proposal__content-desc">{renderPriceIfTagret()}</p>
          </li>

          <li className="proposal__content-item">
            <p className="proposal__content-value">{`${percent} %`}</p>
            <p className="proposal__content-desc">Процентная ставка</p>
          </li>

          <li className="proposal__content-item">
            <p className="proposal__content-value">{`${getRenderPayment()} рублей`}</p>
            <p className="proposal__content-desc">Ежемесячный платеж</p>
          </li>

          <li className="proposal__content-item">
            <p className="proposal__content-value">{`${getRenderProfit()} рублей`}</p>
            <p className="proposal__content-desc">Необходимый доход</p>
          </li>
        </ul>
        <button className="proposal__btn" type="button" onClick={onButtonClick}>Оформить заявку</button>
      </div>
      <CalculatorQuestionnaire
        questionnaireActive={props.questionnaireActive}
        onQuestionnaireActive={props.onQuestionnaireActive}
        counter={props.counter}
        onCounter={props.onCounter}
        credit={credit}
        price={props.price}
        deposit={props.deposit}
        time={props.time}
        target={props.target}
      />

    </>
  );
};

Proposal.propTypes = {
  target: PropTypes.string.isRequired,
  credit: PropTypes.number.isRequired,
  deposit: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  time: PropTypes.number.isRequired,
  contribution: PropTypes.string.isRequired,
  lifeInsurance: PropTypes.bool,
  carInsurance: PropTypes.bool,
  capital: PropTypes.bool,
  questionnaireActive: PropTypes.bool.isRequired,
  onQuestionnaireActive: PropTypes.func.isRequired,
  counter: PropTypes.number.isRequired,
  onCounter: PropTypes.func.isRequired,
};

export default Proposal;
