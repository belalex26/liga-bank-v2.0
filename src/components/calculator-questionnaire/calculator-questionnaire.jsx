import React from 'react';

import Success from '../success/success';
import CalculatorQuestionnaireHoc from '../../hoc/calculator-questionnaireр-hoc';

const CalculatorQuestionnaire = ({...props}) => {

  const renderTarget= () => {
    if (props.target === 'Ипотечное кредитование') {
      return('Ипотека')
    } else {
      return('Автокредит')
    }
  }

  const renderPriceIfTagret = () => {
    if (props.target === 'Ипотечное кредитование') {
      return('Стоимость недвижимости')
    } else {
      return('Стоимость автомобиля')
    }
  }

  const renderTime = () => {
    if (props.time === 1) {
      return(
        props.time + ' год'
      )
    } else {
      return(
        props.time + ' лет'
      )
    }
  }

  const onButtonSuccessClick = () => {
    props.onSuccessActive(true)
  }
    return (
      <>
        <fieldset className={props.questionnaireActive ? "calculator-questionnaire calculator-questionnaire--active" : "calculator-questionnaire"}>
          <p className="calculator-questionnaire__title">Шаг 3. Оформление заявки</p>

          <ul className="calculator-questionnaire__list">
            <li className="calculator-questionnaire__item">
              <p className="calculator-questionnaire__item-title">Номер заявки</p>
              <p className="calculator-questionnaire__item-value">№ 000{props.counter}</p>
            </li>

            <li className="calculator-questionnaire__item">
              <p className="calculator-questionnaire__item-title">Цель кредита</p>
              <p className="calculator-questionnaire__item-value">{renderTarget()}</p>
            </li>

            <li className="calculator-questionnaire__item calculator-questionnaire__item--price">
              <p className="calculator-questionnaire__item-title">{renderPriceIfTagret()} </p>
              <p className="calculator-questionnaire__item-value">{props.price} рублей</p>
            </li>

            <li className="calculator-questionnaire__item">
              <p className="calculator-questionnaire__item-title">Первоначальный взнос</p>
              <p className="calculator-questionnaire__item-value">{`${props.price * (props.contribution/100)} рублей`}</p>
            </li>

            <li className="calculator-questionnaire__item calculator-questionnaire__item--time">
              <p className="calculator-questionnaire__item-title">Срок кредитования</p>
              <p className="calculator-questionnaire__item-value">{renderTime()}</p>
            </li>
          </ul>

          <div className="calculator-questionnaire__wrap">
            <label className="calculator-questionnaire__label" htmlFor="userName"></label>
            <input className="calculator-questionnaire__input calculator-questionnaire__input--name" type="text" name="userName" placeholder="ФИО"/>

            <label className="calculator-questionnaire__label" htmlFor="phone"></label>
            <input className="calculator-questionnaire__input calculator-questionnaire__input--phone" type="phone" name="phone" placeholder="Телефон" pattern="[\+]\d{1}\s[\(]\d{3}[\)]\s\d{3}[\-]\d{2}[\-]\d{2}" minlength="18" maxlength="18"/>

            <label className="calculator-questionnaire__label" htmlFor="email"></label>
            <input className="calculator-questionnaire__input calculator-questionnaire__input--email" type="email" name="email" placeholder="E-mail"/>
          </div>

          <button className="calculator-questionnaire__btn" type="submit" onClick={onButtonSuccessClick}>Отправить</button>

        </fieldset>
        <Success successActive={props.successActive} onSuccessActive={props.onSuccessActive}/>
      </>
    );
  };
  
  export default CalculatorQuestionnaireHoc(CalculatorQuestionnaire);