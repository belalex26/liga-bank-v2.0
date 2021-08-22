import React from 'react';
import InputMask from 'react-input-mask';
import PropTypes from 'prop-types';

import Success from '../success/success';
import calculatorQuestionnaireHoc from '../../hoc/calculator-questionnaireр-hoc';

const CalculatorQuestionnaire = ({...props}) => {

  const ONE_YEAR = `1`;
  const FIVE_YEARS = `5`;
  const ERROR_TEXT = `Это поле не может быть пустым`;

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
    if (props.time === ONE_YEAR) {
      return (
        props.time + ` год`
      );
    } else if (props.time >= FIVE_YEARS) {
      return (
        props.time + ` лет`
      );
    }
    return (
      props.time + ` года`
    );
  };

  const onFullNameValid = () => {
    if (props.fullName.length > 2) {
      return (props.onFullNameError(false));
    }
    return (props.onFullNameError(true));
  };

  const onEmailValid = () => {
    if (props.email.length > 2) {
      return (props.onEmailError(false));
    }
    return (props.onEmailError(true));
  };

  const onPhoneValid = () => {
    if (props.phone.search(/\d/) !== -1) {
      return (props.onPhoneError(false));
    }
    return (props.onPhoneError(true));
  };

  const onApplicationValid = () => {
    onFullNameValid();
    onPhoneValid();
    onEmailValid();
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
    } return (onApplicationValid());
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
          <div className="calculator-questionnaire__container">
            <label className="calculator-questionnaire__label">
              <span className={props.fullNameError ? `calculator-questionnaire__message calculator-questionnaire__error` : `calculator-questionnaire__message`}>{ERROR_TEXT}</span>
              <input className="calculator-questionnaire__input calculator-questionnaire__input--name" type="text" name="fullName" placeholder="ФИО" onBlur={onFullNameValid} value={props.fullName} onChange={((evt) => props.onFullName(evt.target.value))} />
            </label>
          </div>
          <div className="calculator-questionnaire__container">
            <label className="calculator-questionnaire__label">
              <span className={props.phoneError ? `calculator-questionnaire__message calculator-questionnaire__error` : `calculator-questionnaire__message`}>{ERROR_TEXT}</span>
              <InputMask
                mask="+9(999)999-99-99"
                value={props.phone}
                onChange={((evt) => props.onPhone(evt.target.value))}
                placeholder="Телефон"
                className="calculator-questionnaire__input calculator-questionnaire__input--phone"
                type="tel"
                onBlur={onPhoneValid}
              />
            </label>
            <label className="calculator-questionnaire__label">
              <span className={props.emailError ? `calculator-questionnaire__message calculator-questionnaire__error` : `calculator-questionnaire__message`}>{ERROR_TEXT}</span>
              <input className="calculator-questionnaire__input calculator-questionnaire__input--email" type="email" name="email" placeholder="E-mail" onBlur={onEmailValid} value={props.email} onChange={((evt) => props.onEmail(evt.target.value))} />
            </label>
          </div>

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
  time: PropTypes.number.isRequired,
  fullName: PropTypes.string.isRequired,
  onFullName: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  onEmail: PropTypes.func.isRequired,
  phone: PropTypes.string.isRequired,
  onPhone: PropTypes.func.isRequired,
  counter: PropTypes.number.isRequired,
  onCounter: PropTypes.func.isRequired,
  applicationItems: PropTypes.array.isRequired,
  onApplicationItems: PropTypes.func.isRequired,
  questionnaireActive: PropTypes.bool.isRequired,
  successActive: PropTypes.bool.isRequired,
  onSuccessActive: PropTypes.func.isRequired,
  fullNameError: PropTypes.bool.isRequired,
  emailError: PropTypes.bool.isRequired,
  phoneError: PropTypes.bool.isRequired,
  onFullNameError: PropTypes.func.isRequired,
  onEmailError: PropTypes.func.isRequired,
  onPhoneError: PropTypes.func.isRequired,
};

export default calculatorQuestionnaireHoc(CalculatorQuestionnaire);
