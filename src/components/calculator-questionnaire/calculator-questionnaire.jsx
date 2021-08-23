import React from 'react';
import InputMask from 'react-input-mask';
import PropTypes from 'prop-types';


import Success from '../success/success';
import calculatorQuestionnaireHoc from '../../hoc/calculator-questionnaireр-hoc';

const CalculatorQuestionnaire = ({...props}) => {
  const YEARS_OLD = 21;
  const ONE_YEAR = 1;
  const TWO_YEAR = 2;
  const FOUR_YEARS = 4;
  const TWENTY_TWO_YEARS = 22;
  const TWENTY_FOUR_YEARS = 24;

  let errorText = `Это поле не может быть пустым`;
  let errorTextEmail = `Введите корректный email`;

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

  const onTimeRender = () => {

    if (props.time === ONE_YEAR || props.time === YEARS_OLD) {
      return (props.time + ` год`);
    } else if (props.time >= TWO_YEAR && props.time <= FOUR_YEARS || props.time >= TWENTY_TWO_YEARS && props.time <= TWENTY_FOUR_YEARS) {
      return (props.time + ` года`);
    }
    return (props.time + ` лет`);
  };

  const onFullNameValid = () => {
    if (props.fullName.length > 2) {
      return (props.onFullNameError(false));
    }
    return (props.onFullNameError(true));
  };

  const onEmailChange = (evt) => {
    props.onEmail(evt.target.value);
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(evt.target.value).toLowerCase())) {
      return (props.onEmailError(true));
    }
    return (props.onEmailError(false));
  };

  const onRenderEmailText = () => {
    if (!props.email) {
      errorTextEmail = errorText;
    } return (errorTextEmail);
  };

  const onEmailValid = () => {
    if (!props.email) {
      props.onEmailError(true);
    }
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
    onApplicationValid();
    if (!props.emailError && !props.phoneError && !props.fullNameError) {
      if (props.email && props.phone && props.fullName) {
        props.onSuccessActive(true);
        props.onCounter(props.counter + 1);
        onAddItemClick();
      }
    }
  };

  return (
    <>
      <fieldset className={props.questionnaireActive ? `calculator-questionnaire calculator-questionnaire--active` : `calculator-questionnaire`} id="questionnaire">
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
            <p className="calculator-questionnaire__item-value">{onTimeRender()}</p>
          </li>
        </ul>

        <div className="calculator-questionnaire__wrap">
          <div className="calculator-questionnaire__container">
            <label className="calculator-questionnaire__label">
              <span className={props.fullNameError ? `calculator-questionnaire__message calculator-questionnaire__error` : `calculator-questionnaire__message`}>{errorText}</span>
              <input className="calculator-questionnaire__input calculator-questionnaire__input--name" type="text" name="fullName" placeholder="ФИО" onBlur={onFullNameValid} value={props.fullName} onChange={((evt) => props.onFullName(evt.target.value))} />
            </label>
          </div>
          <div className="calculator-questionnaire__container">
            <label className="calculator-questionnaire__label">
              <span className={props.phoneError ? `calculator-questionnaire__message calculator-questionnaire__error` : `calculator-questionnaire__message`}>{errorText}</span>
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
              <span className={props.emailError ? `calculator-questionnaire__message calculator-questionnaire__error` : `calculator-questionnaire__message`}>{onRenderEmailText()}</span>
              <input className="calculator-questionnaire__input calculator-questionnaire__input--email" type="email" name="email" placeholder="E-mail" value={props.email} onChange={onEmailChange} />
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
  emailValid: PropTypes.bool.isRequired,
  phoneError: PropTypes.bool.isRequired,
  onFullNameError: PropTypes.func.isRequired,
  onEmailError: PropTypes.func.isRequired,
  onEmailValid: PropTypes.func.isRequired,
  onPhoneError: PropTypes.func.isRequired,
};

export default calculatorQuestionnaireHoc(CalculatorQuestionnaire);
