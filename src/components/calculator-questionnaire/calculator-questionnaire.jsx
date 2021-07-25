import React from 'react';

const CalculatorQuestionnaire = ({...props}) => {
    return (

        <fieldset className="calculator-questionnaire calculator__form-step--three">
          <p className="calculator-questionnaire__title">Шаг 3. Оформление заявки</p>

          <ul className="calculator-questionnaire__list">
            <li className="calculator-questionnaire__item">
              <p className="calculator-questionnaire__item-title">Номер заявки</p>
              <p className="calculator-questionnaire__item-value">№ 000{props.counter}</p>
            </li>

            <li className="calculator-questionnaire__item">
              <p className="calculator-questionnaire__item-title">Цель кредита</p>
              <p className="calculator-questionnaire__item-value">{props.target}</p>
            </li>

            <li className="calculator-questionnaire__item">
              <p className="calculator-questionnaire__item-title">Стоимость недвижимости</p>
              <p className="calculator-questionnaire__item-value">{props.price} рублей</p>
            </li>

            <li className="calculator-questionnaire__item">
              <p className="calculator-questionnaire__item-title">Первоначальный взнос</p>
              <p className="calculator-questionnaire__item-value"></p>
            </li>

            <li className="calculator-questionnaire__item">
              <p className="calculator-questionnaire__item-title">Срок кредитования</p>
              <p className="calculator-questionnaire__item-value">{props.time} лет</p>
            </li>
          </ul>

          <div className="calculator-questionnaire__wrap">
            <label className="calculator-questionnaire__label" htmlFor="userName"></label>
            <input className="calculator-questionnaire__input calculator-questionnaire__input--name" type="text" name="userName" placeholder="ФИО"/>

            <label className="calculator-questionnaire__label" htmlFor="phone"></label>
            <input className="calculator-questionnaire__input calculator-questionnaire__input--phone" type="phone" name="phone" placeholder="Телефон"/>

            <label className="calculator-questionnaire__label" htmlFor="email"></label>
            <input className="calculator-questionnaire__input calculator-questionnaire__input--email" type="email" name="email" placeholder="E-mail"/>
          </div>

          <button className="calculator-questionnaire__btn" type="submit" onClick={() => props.onCounter(props.counter + 1)}>Отправить</button>

        </fieldset>

    );
  };
  
  export default CalculatorQuestionnaire;