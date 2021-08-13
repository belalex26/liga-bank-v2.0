import React, {useState} from 'react';
import PropTypes from 'prop-types';

const CalculatorAutoHoc = (Component) => {

  const CalculatorAutoState = () => {

    const [price, setPrice] = useState(``);
    const [deposit, setDeposit] = useState();
    const [contribution, setContribution] = useState(20);
    const [time, setTime] = useState(``);
    const [counter, setCounter] = useState(1);


    // чек-боксы
    const [lifeInsurance, setLifeInsurance] = useState(true);
    const [carInsurance, setCarInsurance] = useState(true);


    return (
      <Component
        price={price} onPrice={setPrice}
        deposit={deposit} onDeposit={setDeposit}
        contribution={contribution} onContribution={setContribution}
        time={time} onTime={setTime}
        lifeInsurance={lifeInsurance} onLifeInsurance={setLifeInsurance}
        carInsurance={carInsurance} onCarInsurance={setCarInsurance}
        counter={counter} onCounter={setCounter}
      />
    );

  };
  return CalculatorAutoState;
};


CalculatorAutoHoc.propType = {
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
  counter: PropTypes.number.isRequired,
  onCounter: PropTypes.func.isRequired,
};

export default CalculatorAutoHoc;
