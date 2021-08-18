import React, {useState} from 'react';
import PropTypes from 'prop-types';

const CalculatorMortgageHoc = (Component) => {

  const CalculatorMortgageState = ({...props}) => {

    const [price, setPrice] = useState(``);
    const [deposit, setDeposit] = useState(``);
    const [contribution, setContribution] = useState(`10`);
    const [time, setTime] = useState(``);
    const [counter, setCounter] = useState(1);
    const [error, setError] = useState(false);

    // чек-боксы
    const [capital, setCapital] = useState(false);


    return (
      <Component
        target={props.target}
        questionnaireActive={props.questionnaireActive} onQuestionnaireActive={props.onQuestionnaireActive}

        price={price} onPrice={setPrice}
        deposit={deposit} onDeposit={setDeposit}
        contribution={contribution} onContribution={setContribution}
        time={time} onTime={setTime}
        capital={capital} onCapital={setCapital}
        counter={counter} onCounter={setCounter}
        error={error} onError={setError}
      />
    );

  };

  CalculatorMortgageState.propTypes = {
    target: PropTypes.string.isRequired,
    questionnaireActive: PropTypes.bool.isRequired,
    onQuestionnaireActive: PropTypes.func.isRequired,
  };
  return CalculatorMortgageState;
};

export default CalculatorMortgageHoc;
