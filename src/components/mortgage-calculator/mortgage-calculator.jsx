import React from 'react';

import MortgageCalculatorHoc from '../../hoc/mortgage-calculator-hoc';

const MortgageCalculator = ({...props}) => {
    return (

        <fieldset className="calculator__form-step calculator__form-step--two">
            <legend className="calculator__form-title">Шаг 2. Введите параметры кредита</legend>

            <label className="calculator__form-label calculator__form-label--price">Стоимость недвижимости
                <button className='calculator__form-btn calculator__form-btn--minus'></button>
                <input className="calculator__form-input" type="text" name="price" min='1200000' max='25000000' />
                <button className='calculator__form-btn calculator__form-btn--plus'></button>
                <p className="calculator__form-text">От 1 200 000  до 25 000 000 рублей</p>
            </label>

            <label className="calculator__form-label calculator__form-label--contribution">Первоначальный взнос
                <input className="calculator__form-input" type="text" />
                <input className="calculator__form-range" type="range" name="contribution" min='10' step='5' />
                <p className="calculator__form-text">10%</p>
            </label>

            <label className="calculator__form-label calculator__form-label--time">Срок кредитования
                <input className="calculator__form-input" type="text" />
                <input className="calculator__form-range" type="range" name="time" min='5' step='1' />
                <div className="calculator__form-desc">
                    <p className="calculator__form-text">5 лет</p>
                    <p className="calculator__form-text">30 лет</p>
                </div>
            </label>

            <label className="calculator__form-label calculator__form-label--checkbox">
                <input className="calculator__form-checkbox" type="checkbox" name="maternity capital"/>
                <p className="calculator__form-checkbox-text">Использовать материнский капитал</p>
            </label>
        </fieldset>

    );
  };
  
  export default MortgageCalculatorHoc(MortgageCalculator);