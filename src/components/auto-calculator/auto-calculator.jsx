import React from 'react';

import AutoCalculatorHoc from '../../hoc/auto-calculator-hoc';

const AutoCalculator = ({...props}) => {
    return (

        <fieldset className="calculator__form-step calculator__form-step--two">
            <legend className="calculator__form-title">Шаг 2. Введите параметры кредита</legend>

            <label className="calculator__form-label calculator__form-label--price">Стоимость автомобиля
                <button className='calculator__form-btn calculator__form-btn--minus'></button>
                <input className="calculator__form-input" type="text" name="price" min='500000' max='5000000'/>
                <button className='calculator__form-btn calculator__form-btn--plus'></button>
                <p className="calculator__form-price-text">От 500 000  до 5 000 000 рублей</p>   
            </label>

            <label className="calculator__form-label calculator__form-label--contribution">Первоначальный взнос
                <input className="calculator__form-input" type="text" />
                <input className="calculator__form-range" type="range" name="contribution" min='20' step='5' />
                <p className="calculator__form-text">20%</p>
            </label>


            <label className="calculator__form-label">Срок кредитования
                <input className="calculator__form-input" type="text" />
                <input className="calculator__form-range" type="range" name="period" min='1' step='1' />
                <div className="calculator__form-desc">
                    <p className="calculator__form-text">1 год</p>
                    <p className="calculator__form-text">5 лет</p>
                </div>
            </label>

            <label className="calculator__form-label calculator__form-label--checkbox">
                <input className="calculator__form-checkbox" type="checkbox" name="insurance"/>
                <p className="calculator__form-checkbox-text">Оформить КАСКО в нашем банке</p>
            </label>

            <label className="calculator__form-label calculator__form-label--checkbox">
                <input className="calculator__form-checkbox" type="checkbox" name="insurance"/>
                <p className="calculator__form-checkbox-text">Оформить Страхование жизни в нашем банке</p>
            </label>

        </fieldset>

    );
  };
  
  export default AutoCalculatorHoc(AutoCalculator);