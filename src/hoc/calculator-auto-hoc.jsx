import React, {useState} from 'react';
import PropTypes from 'prop-types';

const CalculatorAutoHoc = (Component) => {

  const CalculatorAutoState = ({...props}) => {

    const [price, setPrice] = useState(`500000`);
    const [deposit, setDeposit] = useState(``);
    const [contribution, setContribution] = useState(`20`);
    const [time, setTime] = useState(`1`);
    const [counter, setCounter] = useState(1);
    const [error, setError] = useState(false);

    // чек-боксы
    const [lifeInsurance, setLifeInsurance] = useState(true);
    const [carInsurance, setCarInsurance] = useState(true);


    return (
      <Component
        target={props.target}
        questionnaireActive={props.questionnaireActive} onQuestionnaireActive={props.onQuestionnaireActive}

        price={price} onPrice={setPrice}
        deposit={deposit} onDeposit={setDeposit}
        contribution={contribution} onContribution={setContribution}
        time={time} onTime={setTime}
        lifeInsurance={lifeInsurance} onLifeInsurance={setLifeInsurance}
        carInsurance={carInsurance} onCarInsurance={setCarInsurance}
        counter={counter} onCounter={setCounter}
        error={error} onError={setError}
      />
    );

  };

  CalculatorAutoState.propTypes = {
    target: PropTypes.string.isRequired,
    questionnaireActive: PropTypes.bool.isRequired,
    onQuestionnaireActive: PropTypes.func.isRequired,
  };
  return CalculatorAutoState;
};

export default CalculatorAutoHoc;
