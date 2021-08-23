/* eslint-disable no-console */
import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';

import calculatorAutoHoc from '../../hoc/calculator-auto-hoc';
import Rejection from '../rejection/rejection';
import Proposal from '../proposal/proposal';


const AutoCalculator = ({...props}) => {
  const MIN_TIME = 1;
  const MAX_TIME = 5;
  const YEARS_OLD = 2;
  const NULL = 0;
  const STEP_PRICE = 50000;
  const PRICE_VALID_MIN = 500000;
  const PRICE_VALID_MAX = 5000000;
  const MIN_CONTRIBUTION = 20;
  const PERCENT = 100;
  const REJECTION_PRICE = 200000;

  let price = Number(props.price);
  let depositValue = Number(props.deposit);
  let time = Number(props.time);
  let contributionValue = Number(props.contribution);
  let minDeposit = (price * MIN_CONTRIBUTION) / PERCENT;
  let credit = price - depositValue;

  useEffect(() => {

    if (!price) {
      return (props.onDeposit(`240 000 рублей`));
    }
    return (props.onDeposit(String((price * contributionValue) / PERCENT)));
  }, [price, contributionValue]);

  const onClickButtonMinus = () => {
    if (!price) {
      return (props.onPrice(String(PRICE_VALID_MIN)));
    }
    price = price - STEP_PRICE;
    return (props.onPrice(String(price)));
  };


  const onClickButtonPlus = () => {
    if (!price) {
      return (props.onPrice(String(PRICE_VALID_MIN)));
    }
    price = price + STEP_PRICE;
    return (props.onPrice(String(price)));
  };


  const onPriceValid = () => {

    if (price < PRICE_VALID_MIN) {
      if (!price) {
        return (``);
      } else if (price <= NULL) {
        props.onPrice(NULL);
      }
      props.onError(true);
      return (<span className="calculator__form-error">Некорректное значение</span>);
    } else if (price > PRICE_VALID_MAX) {
      props.onError(true);
      return (<span className="calculator__form-error">Некорректное значение</span>);

    }
    props.onError(false);
    return (``);
  };

  const onDepositValid = () => {

    onContributionRender();

    if (depositValue < minDeposit) {
      return (props.onDeposit(String(minDeposit)));
    }
    return (props.deposit);
  };

  const onContributionRender = () => {

    if (depositValue < minDeposit) {
      return (props.onContribution(String(MIN_CONTRIBUTION)));
    }
    return (props.onContribution(String(Math.ceil((props.deposit / price) * PERCENT))));
  };

  const onTimeValid = () => {
    if (!time) {
      props.onTime(String(time));
      if (time < MIN_TIME) {
        props.onTime(String(MIN_TIME));
      }
    } else if (time > MAX_TIME) {
      return (props.onTime(String(MAX_TIME)));
    }
    return (`${props.time}`);
  };
  const renderTime = () => {

    if (props.time >= MAX_TIME) {
      return (` лет`);
    } else if (props.time >= YEARS_OLD) {
      return (` года`);
    }
    return (` год`);
  };

  const onTimeRender = () => {
    if (!props.time) {
      return (``);
    }
    return (renderTime());
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
          price={price}
          deposit={depositValue}
          time={time}
          contribution={props.contribution}
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
          <button className="calculator__form-btn calculator__form-btn--minus" type="button" onClick={onClickButtonMinus}></button>
          <label className="calculator__form-label calculator__form-label--price">Стоимость автомобиля
            {onPriceValid()}
            <NumberFormat
              className="calculator__form-input"
              value={props.price}
              displayType="number"
              thousandSeparator=" "
              suffix=" рублей"
              placeholder="1 200 000 рублей"
              onValueChange={(values) => {
                const {value} = values;
                props.onPrice(value);
              }}
            />
          </label>
          <button className="calculator__form-btn calculator__form-btn--plus" type="button" onClick={onClickButtonPlus}></button>
          <p className="calculator__form-text">От 500 000  до 5 000 000 рублей</p>
        </div>

        <label className="calculator__form-label calculator__form-label--deposit">Первоначальный взнос
          <NumberFormat
            className="calculator__form-input"
            value={props.deposit}
            displayType="number"
            thousandSeparator=" "
            suffix=" рублей"
            onBlur={onDepositValid}
            placeholder="240 000 рублей"
            onValueChange={(values) => {
              const {value} = values;
              props.onDeposit(value);
            }}
          />
        </label>

        <label className="calculator__form-label calculator__form-label--contribution">
          <input className="calculator__form-range" type="range" name="contribution" min='20' step='5' value={props.contribution} onChange={((evt) => props.onContribution(evt.target.value))} />
          <span className="calculator__form-text calculator__form-text--contribution">20%</span>
        </label>

        <label className="calculator__form-label calculator__form-label--time">Срок кредитования
          <NumberFormat
            className="calculator__form-input"
            value={props.time}
            displayType="number"
            suffix={onTimeRender()}
            onBlur={onTimeValid}
            placeholder="1 год"
            onValueChange={(values) => {
              const {value} = values;
              props.onTime(value);
            }}
          />
        </label>

        <label className="calculator__form-label calculator__form-label--time-range">
          <input className="calculator__form-range" type="range" name="period" min='1' max="5" step='1' value={props.time} onChange={((evt) => props.onTime(evt.target.value))} />
        </label>

        <div className="calculator__form-desc">
          <p className="calculator__form-text">1 год</p>
          <p className="calculator__form-text">5 лет</p>
        </div>

        <div className="calculator__form-label-wrap">
          <label className="calculator__form-label calculator__form-label--checkbox">
            <input className="calculator__form-checkbox" type="checkbox" name="insurance" checked={props.carInsurance} onChange={() => props.onCarInsurance(!props.carInsurance)}/>
            <span className="calculator__form-checkbox-text">Оформить КАСКО в нашем банке</span>
          </label>

          <label className="calculator__form-label calculator__form-label--checkbox">
            <input className="calculator__form-checkbox" type="checkbox" name="insurance" checked={props.lifeInsurance} onChange={() => props.onLifeInsurance(!props.lifeInsurance)}/>
            <span className="calculator__form-checkbox-text">Оформить Страхование жизни в нашем банке</span>
          </label>
        </div>

      </fieldset>
      {renderProposal()}
    </>
  );
};

AutoCalculator.propTypes = {
  target: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  onPrice: PropTypes.func.isRequired,
  time: PropTypes.string.isRequired,
  onTime: PropTypes.func.isRequired,
  deposit: PropTypes.string.isRequired,
  onDeposit: PropTypes.func.isRequired,
  contribution: PropTypes.string.isRequired,
  onContribution: PropTypes.func.isRequired,
  questionnaireActive: PropTypes.bool.isRequired,
  onQuestionnaireActive: PropTypes.func.isRequired,
  error: PropTypes.bool.isRequired,
  onError: PropTypes.func.isRequired,
  counter: PropTypes.number.isRequired,
  onCounter: PropTypes.func.isRequired,
  lifeInsurance: PropTypes.bool.isRequired,
  onLifeInsurance: PropTypes.func.isRequired,
  carInsurance: PropTypes.bool.isRequired,
  onCarInsurance: PropTypes.func.isRequired
};

export default calculatorAutoHoc(AutoCalculator);
