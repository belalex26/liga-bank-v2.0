import React, {useState} from 'react';
import PropTypes from 'prop-types';

const CalculatorHoc = (Component) => {

  const CalculatorState = () => {

    const [target, setTarget] = useState(`Выберите цель кредита`);
    const [selectActive, setSelectActive] = useState(false);

    const [questionnaireActive, setQuestionnaireActive] = useState(false);
    /*
    const [price, setPrice] = useState();
    const [deposit, setDeposit] = useState();
    const [contribution, setContribution] = useState(20);
    const [time, setTime] = useState([1, 5]);
    const [counter, setCounter] = useState(1);
    const [errors, setErrors] = useState({});

    // чек-боксы
    const [capital, setCapital] = useState(false);
    const [lifeInsurance, setLifeInsurance] = useState(true);
    const [carInsurance, setCarInsurance] = useState(true);

*/
    return (
      <Component
        selectActive={selectActive} onSelectActive={setSelectActive}
        questionnaireActive={questionnaireActive} onQuestionnaireActive={setQuestionnaireActive}
        target={target} onTarget={setTarget}
      />
    );

  };
  return CalculatorState;
};


CalculatorHoc.propType = {
  target: PropTypes.string.isRequired,
  onTarget: PropTypes.func.isRequired,
  price: PropTypes.string.isRequired,
  onPrice: PropTypes.func.isRequired,
  deposit: PropTypes.number.isRequired,
  onDeposit: PropTypes.func.isRequired,
  contribution: PropTypes.number.isRequired,
  onContribution: PropTypes.func.isRequired,
  time: PropTypes.string.isRequired,
  onTime: PropTypes.func.isRequired,
  questionnaireActive: PropTypes.bool.isRequired,
  onQuestionnaireActive: PropTypes.func.isRequired,
  counter: PropTypes.number.isRequired,
  onCounter: PropTypes.func.isRequired,
  errors: PropTypes.bool.isRequired,
  onErrors: PropTypes.func.isRequired,
};

export default CalculatorHoc;
