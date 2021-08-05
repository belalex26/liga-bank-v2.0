import React from 'react';
import PropTypes from 'prop-types';

import Rejection from '../rejection/rejection';
import Proposal from '../proposal/proposal';


const AutoCalculator = ({...props}) => {

  const MAX_PRICE = 5000000;
  const STEP_PRISE = 50000;
  const REJECTION_PRICE = 200000;
  const PRICE_VALID = 500000;

  let price = parseFloat(props.price);
  let deposit = (Math.round(price * (props.contribution / 100)));
  let contribution = (deposit / price) * 100;
  let credit = price - deposit;

  let depositValue = deposit.toString();

  if (price > MAX_PRICE) {
    props.onPrice(MAX_PRICE);
  }

  const onButtonMinusClick = () => {
    if (price > STEP_PRISE) {
      props.onPrice(price - STEP_PRISE);
    }
  };

  const onButtonPlusClick = () => {
    if (price < MAX_PRICE) {
      props.onPrice((price + STEP_PRISE));
    }
  };

  const onPriceValid = () => {
    if (price < PRICE_VALID) {
      return (
        <span className="calculator__form-error">Некорректное значение</span>
      );
    } else if (price > MAX_PRICE) {
      return (
        <span className="calculator__form-error">Некорректное значение</span>
      );
    }
    return (``);
  };

  const renderProposal = () => {

    if (props.price && props.time) {

      if (credit < REJECTION_PRICE) {
        return (
          <Rejection target={props.target}/>
        );
      }
      return (
        <Proposal
          target={props.target}
          credit={credit}
          price={props.price}
          time={props.time}
          deposit={deposit}
          lifeInsurance={props.lifeInsurance}
          carInsurance={props.carInsurance}
          questionnaireActive={props.questionnaireActive}
          onQuestionnaireActive={props.onQuestionnaireActive}
          counter={props.counter}
          onCounter={props.onCounter}
        />
      );
    }
    return (``);
  };

  return (
    <>
      <fieldset className="calculator__form-step calculator__form-step--two">
        <legend className="calculator__form-title">Шаг 2. Введите параметры кредита</legend>

        <div className="calculator__form-price">
          <button className="calculator__form-btn calculator__form-btn--minus" type="button" onClick={onButtonMinusClick}></button>
          <label className="calculator__form-label calculator__form-label--price">Стоимость автомобиля
            {onPriceValid()}
            <input className="calculator__form-input" type="text" name="price" data-min='200000' data-max='5000000' value={props.price} onChange={((evt) => props.onPrice(evt.target.value))} placeholder="1 200 000 рублей"/>
          </label>
          <button className="calculator__form-btn calculator__form-btn--plus" type="button" onClick={onButtonPlusClick}></button>
          <p className="calculator__form-text">От 500 000  до 5 000 000 рублей</p>
        </div>

        <label className="calculator__form-label calculator__form-label--deposit">Первоначальный взнос
          <input className="calculator__form-input" type="number" value={depositValue} onChange={((evt) => props.onContribution(evt.target.value))} placeholder="240 000 рублей"/>
        </label>

        <label className="calculator__form-label calculator__form-label--contribution">
          <input className="calculator__form-range" type="range" name="contribution" min='20' step='5' value={contribution} onChange={((evt) => props.onContribution(evt.target.value))} />
          <span className="calculator__form-text">20%</span>
        </label>

        <label className="calculator__form-label calculator__form-label--time">Срок кредитования
          <input className="calculator__form-input" type="text" value={props.time} onChange={((evt) => props.onTime(evt.target.value))} placeholder="1 год"/>
        </label>
        <div className="calculator__form-desc">
          <p className="calculator__form-text">1 год</p>
          <p className="calculator__form-text">5 лет</p>
        </div>

        <label className="calculator__form-label calculator__form-label--time-range">
          <input className="calculator__form-range" type="range" name="period" min='1' max="5" step='1' value={props.time} onChange={((evt) => props.onTime(evt.target.value))} />
        </label>

        <label className="calculator__form-label calculator__form-label--checkbox">
          <input className="calculator__form-checkbox" type="checkbox" name="insurance" checked={props.carInsurance} onChange={() => props.onCarInsurance(!props.carInsurance)}/>
          <span className="calculator__form-checkbox-text">Оформить КАСКО в нашем банке</span>
        </label>

        <label className="calculator__form-label calculator__form-label--checkbox">
          <input className="calculator__form-checkbox" type="checkbox" name="insurance" checked={props.lifeInsurance} onChange={() => props.onLifeInsurance(!props.lifeInsurance)}/>
          <span className="calculator__form-checkbox-text">Оформить Страхование жизни в нашем банке</span>
        </label>

      </fieldset>
      {renderProposal()}
    </>
  );
};

AutoCalculator.propTypes = {
  target: PropTypes.string.isRequired,
  credit: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  onPrice: PropTypes.func.isRequired,
  time: PropTypes.string.isRequired,
  onTime: PropTypes.func.isRequired,
  deposit: PropTypes.number.isRequired,
  contribution: PropTypes.number.isRequired,
  onContribution: PropTypes.func.isRequired,
  questionnaireActive: PropTypes.bool.isRequired,
  onQuestionnaireActive: PropTypes.func.isRequired,
  counter: PropTypes.number.isRequired,
  onCounter: PropTypes.func.isRequired,
  lifeInsurance: PropTypes.bool.isRequired,
  onLifeInsurance: PropTypes.func.isRequired,
  carInsurance: PropTypes.bool.isRequired,
  onCarInsurance: PropTypes.func.isRequired
};

export default AutoCalculator;
