import React from 'react';
import PropTypes from 'prop-types';

import MortgageCalculator from '../mortgage-calculator/mortgage-calculator'
import AutoCalculator from '../auto-calculator/auto-calculator'
import CalculatorHoc from '../../hoc/calculator-hoc'

const Calculator = ({...props}) => {

  const options = ['Ипотечное кредитование' , 'Автомобильное кредитование']

  const onSubmitForm = (evt) => {
    evt.preventDefault();
}

  const getStepRender = () => {

    if (props.target === 'Ипотечное кредитование') {

      return (
        
        <MortgageCalculator
          target={props.target}
          price={props.price}
          onPrice={props.onPrice}
          deposit={props.deposit}
          onDeposit={props.onDeposit}
          contribution={props.contribution}
          onContribution={props.onContribution}
          questionnaireActive={props.questionnaireActive}
          onQuestionnaireActive={props.onQuestionnaireActive}
          time={props.time}
          onTime={props.onTime}
          capital={props.capital}
          onCapital={props.onCapital}
          counter={props.counter}
          onCounter={props.onCounter}


        />
      )
    } else if (props.target === 'Автомобильное кредитование') {
        return (
          <>
            <AutoCalculator
              target={props.target}
              price={props.price} onPrice={props.onPrice}
              deposit={props.deposit} onDeposit={props.onDeposit}
              contribution={props.contribution} onContribution={props.onContribution}
              time={props.time} onTime={props.onTime}
              lifeInsurance={props.lifeInsurance} onLifeInsurance={props.onLifeInsurance}
              carInsurance={props.carInsurance} onCarInsurance={props.onCarInsurance}
              questionnaireActive={props.questionnaireActive} onQuestionnaireActive={props.onQuestionnaireActive}
              counter={props.counter} onCounter={props.onCounter}
              errors={props.errors} onErrors={props.onErrors}
            />
        </>
        )
    }
  }

  return (
    <section className="calculator" id="credit">
      <h2 className="calculator__title">Кредитный калькулятор</h2>
      <form className="calculator__form" onSubmit={onSubmitForm}>
        <fieldset className="calculator__form-step">
          <p className="calculator__form-title">Шаг 1. Цель кредита</p>
          <div className="calculator__form-select">
            <button className="calculator__form-triger" type="button" onClick={(e) => props.onSelectActive(!props.selectActive)}>
              {props.target}
            </button>
            {props.selectActive && (
              <div className="calculator__form-content">
                {options.map((option) => (
                  <button
                    type="button"
                    onClick={(e) => {
                      props.onTarget(option);
                      props.onSelectActive(false)
                    }}
                    className="calculator__form-content-item"
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}   
          </div>
        </fieldset>
        {getStepRender()}
      </form>
    </section>
  );
};

Calculator.prototype = {
  target: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  deposit: PropTypes.number.isRequired,
  contribution: PropTypes.number.isRequired,
  onContribution: PropTypes.func.isRequired,
  time: PropTypes.string.isRequired,
  onTime: PropTypes.func.isRequired,
  questionnaireActive: PropTypes.bool.isRequired,
  onQuestionnaireActive: PropTypes.func.isRequired,
  counter: PropTypes.number.isRequired, 
  onCounter: PropTypes.func.isRequired,
  errors: PropTypes.bool.isRequired,
  onErrors: PropTypes.func.isRequired,
};

export default CalculatorHoc(Calculator);