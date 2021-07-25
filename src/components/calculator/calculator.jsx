import React from 'react';


import MortgageCalculator from '../mortgage-calculator/mortgage-calculator'
import AutoCalculator from '../auto-calculator/auto-calculator'
import CalculatorQuestionnaire from '../calculator-questionnaire/calculator-questionnaire'

import CalculatorHoc from '../../hoc/calculator-hoc'
import Rejection from '../rejection/rejection';
import Proposal from '../proposal/proposal';

const Calculator = ({...props}) => {

  const options = ['Ипотечное кредитование' , 'Автомобильное кредитование']

  const getOption = () => {
    if (!props.target) {
      return ('Выберите цель кредита')
    } else {
      return (props.target)
    }
    
  }

  const getStepRender = () => {

    if (props.target === 'Ипотечное кредитование') {
      return (
        <MortgageCalculator
          priceMortgageState={props.priceMortgageState}
          onPriceMortgageState={props.onPriceMortgageState}
      
        />
      )
    } else if (props.target === 'Автомобильное кредитование') {
        return (
          <AutoCalculator />
        )
    }
  }

  return (
    <section className="calculator">
      <div className="calculator__wrapper">
        <h2 className="calculator__title">Кредитный калькулятор</h2>
        <form className="calculator__form">

          <fieldset className="calculator__form-step">
            <p className="calculator__form-title">Шаг 1. Цель кредита</p>

            <div className="calculator__form-select">
              <button className="calculator__form-triger" onClick={(e) => props.onSelectActive(!props.selectActive)}>
                {getOption()}
              </button>
              {props.selectActive && (
                <div className="calculator__form-content">
                  {options.map((option) => (
                    <button
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

          <MortgageCalculator
            priceMortgageState={props.priceMortgageState} onPriceMortgageState={props.onPriceMortgageState}
          
          />

          <AutoCalculator />

          <CalculatorQuestionnaire
            target = {props.target}
            counter={props.counter}
            onCounter={props.onCounter} 
            price={props.price}
          />

        </form>
        <Proposal />
        <Rejection />
        
      </div>
    </section>

  );
};

export default CalculatorHoc(Calculator);