import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';

const applications = [];

const CalculatorQuestionnaireHoc = (Component) => {

  const CalculatorQuestionnaireState = (props) => {

    const [successActive, setSuccessActive] = useState(false);
    const [applicationItems, setApplicationItems] = useState(JSON.parse(localStorage.getItem(`applications`)) || `[]`);
    const [fullName, setFullName] = useState(``);
    const [phone, setPhone] = useState(``);
    const [email, setEmail] = useState(``);
    const [fullNameError, setFullNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [emailValid, setEmailValid] = useState(false);
    const [phoneError, setPhoneError] = useState(false);

    useEffect(() => {
      setApplicationItems(applications);
    }, []);

    useEffect(() => {
      const body = document.querySelector(`body`);
      body.style.overflow = successActive ? `hidden` : `auto`;
    }, [successActive]);

    useEffect(() => {
      localStorage.setItem(`applications`, JSON.stringify(applicationItems));
    }, [applicationItems]);

    return (
      <Component
        successActive={successActive} onSuccessActive={setSuccessActive}
        counter={props.counter} onCounter={props.onCounter}
        questionnaireActive={props.questionnaireActive} onQuestionnaireActive={props.onQuestionnaireActive}
        time={props.time}
        target={props.target}
        price={props.price}
        deposit={props.deposit}

        applicationItems={applicationItems} onApplicationItems={setApplicationItems}

        fullName={fullName} onFullName={setFullName}
        phone={phone} onPhone={setPhone}
        email={email} onEmail={setEmail}

        fullNameError={fullNameError} onFullNameError={setFullNameError}
        emailError={emailError} onEmailError={setEmailError}
        emailValid={emailValid} onEmailValid={setEmailValid}
        phoneError={phoneError} onPhoneError={setPhoneError}

      />
    );
  };
  CalculatorQuestionnaireState.propTypes = {
    time: PropTypes.number.isRequired,
    target: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    deposit: PropTypes.number.isRequired,
    counter: PropTypes.number.isRequired,
    onCounter: PropTypes.func.isRequired,
    questionnaireActive: PropTypes.bool.isRequired,
    onQuestionnaireActive: PropTypes.func.isRequired,
  };

  return CalculatorQuestionnaireState;
};

export default CalculatorQuestionnaireHoc;
