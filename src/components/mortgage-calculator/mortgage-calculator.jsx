import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';

import calculatorMortgageHoc from '../../hoc/calculator-mortgage-hoc';
import Rejection from '../rejection/rejection';
import Proposal from '../proposal/proposal';

const MortgageCalculator = ({...props}) => {

  const MIN_TIME = 5;
  const MAX_TIME = 30;
  const YEARS_OLD = 21;
  const YEARS_OLD_TIME = 25;
  const NULL = 0;
  const STEP_PRICE = 100000;
  const PRICE_VALID_MIN = 1200000;
  const PRICE_VALID_MAX = 25000000;
  const MIN_CONTRIBUTION = 10;
  const PERCENT = 100;
  const REJECTION_PRICE = 500000;

  let price = Number(props.price);
  let time = Number(props.time);
  let depositValue = Number(props.deposit);
  let contributionValue = Number(props.contribution);
  let minDeposit = (price * MIN_CONTRIBUTION) / PERCENT;
  let credit = price - depositValue;

  useEffect(() => {

    if (!price) {
      return (props.onDeposit(`120 000 рублей`));
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
      return (props.onDeposit(minDeposit));
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
    if (time < MIN_TIME) {
      props.onTime(String(MIN_TIME));
    } else if (time > MAX_TIME) {
      return (props.onTime(String(MAX_TIME)));
    }
    return (`${props.time}`);
  };

  const renderTime = () => {

    if (props.time < YEARS_OLD || props.time >= YEARS_OLD_TIME) {
      return (` лет`);
    } else if (props.time > YEARS_OLD) {
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
          capital={props.capital}
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
          <label className="calculator__form-label calculator__form-label--price">Стоимость недвижимости
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
          <p className="calculator__form-text">От 1 200 000  до 25 000 000 рублей</p>
        </div>

        <label className="calculator__form-label calculator__form-label--deposit">Первоначальный взнос
          <NumberFormat
            className="calculator__form-input"
            value={props.deposit}
            displayType="number"
            thousandSeparator=" "
            suffix=" рублей"
            onBlur={onDepositValid}
            placeholder="120 000 рублей"
            onValueChange={(values) => {
              const {value} = values;
              props.onDeposit(value);
            }}
          />
        </label>

        <label className="calculator__form-label calculator__form-label--contribution">
          <input className="calculator__form-range" type="range" name="contribution" min="10" step='5' value={props.contribution} onChange={((evt) => props.onContribution(evt.target.value))} />
          <span className="calculator__form-text calculator__form-text--contribution">10%</span>
        </label>

        <label className="calculator__form-label calculator__form-label--time">Срок кредитования
          <NumberFormat
            className="calculator__form-input"
            value={props.time}
            onBlur={onTimeValid}
            displayType="number"
            suffix={onTimeRender()}
            placeholder="5 лет"
            onValueChange={(values) => {
              const {value} = values;
              props.onTime(value);
            }}
          />
        </label>

        <label className="calculator__form-label calculator__form-label--time-range">
          <input className="calculator__form-range" type="range" name="time" min="5" max="30" step="1" value={props.time} onChange={((evt) => props.onTime(evt.target.value))} />
        </label>

        <div className="calculator__form-desc">
          <p className="calculator__form-text">5 лет</p>
          <p className="calculator__form-text">30 лет</p>
        </div>

        <div className="calculator__form-label-wrap">
          <label className="calculator__form-label calculator__form-label--checkbox">
            <input className="calculator__form-checkbox" type="checkbox" name="maternity capital" checked={props.capital} onChange={() => props.onCapital(!props.capital)}/>
            <span className="calculator__form-checkbox-text">Использовать материнский капитал</span>
          </label>
        </div>
      </fieldset>
      {renderProposal()}
    </>
  );
};

MortgageCalculator.propTypes = {
  target: PropTypes.string.isRequired,
  credit: PropTypes.string,
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
  capital: PropTypes.bool.isRequired,
  onCapital: PropTypes.func.isRequired,
};


export default calculatorMortgageHoc(MortgageCalculator);
