import React from 'react';
import InputMask from 'react-input-mask';
import PropTypes from 'prop-types';

import Success from '../success/success';
import calculatorQuestionnaireHoc from '../../hoc/calculator-questionnaireр-hoc';

const CalculatorQuestionnaire = ({...props}) => {

  const renderTarget = () => {
    if (props.target === `Ипотечное кредитование`) {
      return (`Ипотека`);
    }
    return (`Автокредит`);
  };

  const renderPriceIfTagret = () => {
    if (props.target === `Ипотечное кредитование`) {
      return (`Стоимость недвижимости`);
    }
    return (`Стоимость автомобиля`);
  };

  const renderTime = () => {
    if (props.time === `1`) {
      return (
        props.time + ` год`
      );
    } else if (props.time >= `5`) {
      return (
        props.time + ` лет`
      );
    }
    return (
      props.time + ` года`
    );
  };

  const onAddItemClick = () => {

    let newApplication = {
      fullName: props.fullName,
      phone: props.phone,
      email: props.email
    };

    props.onApplicationItems([...props.applicationItems, newApplication]);

    resetInput();
  };

  const resetInput = () => {
    props.onFullName(``);
    props.onPhone(``);
    props.onEmail(``);
  };

  const onButtonSuccessClick = () => {
    if (props.fullName && props.phone && props.email) {
      props.onSuccessActive(true);
      props.onCounter(props.counter + 1);
      onAddItemClick();
    }
  };
  return (
    <>
      <fieldset className={props.questionnaireActive ? `calculator-questionnaire calculator-questionnaire--active` : `calculator-questionnaire`}>
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
            <p className="calculator-questionnaire__item-value">{props.deposit} рублей</p>
          </li>

          <li className="calculator-questionnaire__item calculator-questionnaire__item--time">
            <p className="calculator-questionnaire__item-title">Срок кредитования</p>
            <p className="calculator-questionnaire__item-value">{renderTime()}</p>
          </li>
        </ul>

        <div className="calculator-questionnaire__wrap">
          <label className="calculator-questionnaire__label" htmlFor="fullName"></label>
          <input className="calculator-questionnaire__input calculator-questionnaire__input--name" type="text" id="fullName" name="fullName" required placeholder="ФИО" value={props.fullName} onChange={((evt) => props.onFullName(evt.target.value))} pattern="([А-Яа-яЁё])"/>

          <label className="calculator-questionnaire__label" htmlFor="phone"></label>
          <InputMask
            mask="+9(999)999-99-99"
            value={props.phone}
            onChange={((evt) => props.onPhone(evt.target.value))}
            placeholder="Телефон"
            className="calculator-questionnaire__input calculator-questionnaire__input--phone"
            id="phone"
            type="tel"
            required
          />

          <label className="calculator-questionnaire__label" htmlFor="email"></label>
          <input className="calculator-questionnaire__input calculator-questionnaire__input--email" type="email" id="email" name="email" required placeholder="E-mail" value={props.email} onChange={((evt) => props.onEmail(evt.target.value))} pattern="(/[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/igm)" />
        </div>

        <button className="calculator-questionnaire__btn" type="submit" onClick={onButtonSuccessClick}>Отправить</button>

      </fieldset>
      <Success successActive={props.successActive} onSuccessActive={props.onSuccessActive}/>
    </>
  );
};

CalculatorQuestionnaire.propTypes = {
  target: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  deposit: PropTypes.number.isRequired,
  time: PropTypes.string.isRequired,
  fullName: PropTypes.string.isRequired,
  onFullName: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  onEmail: PropTypes.func.isRequired,
  phone: PropTypes.string.isRequired,
  onPhone: PropTypes.func.isRequired,
  counter: PropTypes.number.isRequired,
  onCounter: PropTypes.func.isRequired,
  applicationItems: PropTypes.object.isRequired,
  onApplicationItems: PropTypes.func.isRequired,
  questionnaireActive: PropTypes.bool.isRequired,
  successActive: PropTypes.bool.isRequired,
  onSuccessActive: PropTypes.func.isRequired,
};

export default calculatorQuestionnaireHoc(CalculatorQuestionnaire);
