import React, {useState} from 'react';

const CalculatorHoc = (Component) => {
    
    const CalculatorState = () => {

        const [target, setTarget] = useState('Выберите цель кредита')
        const [selectActive, setSelectActive] = useState(false)

        const [questionnaireActive , setQuestionnaireActive] = useState(false)

        const [price, setPrice] = useState('')
        const [deposit, setDeposit] = useState('')
        const [contribution, setContribution] = useState(10);
        const [time, setTime] = useState('')
        const [counter, setCounter] = useState(1)
        const [errors, setErrors] = useState({});

        //чек-боксы
        const [capital, setCapital] = useState(false)
        const [lifeInsurance, setLifeInsurance] = useState(true)
        const [carInsurance, setCarInsurance] =  useState(true)



        return (
            <Component
                selectActive={selectActive} onSelectActive={setSelectActive}
                questionnaireActive={questionnaireActive} onQuestionnaireActive={setQuestionnaireActive}
                target={target} onTarget={setTarget}
                price={price} onPrice={setPrice}
                deposit={deposit} onDeposit={setDeposit}
                contribution={contribution} onContribution={setContribution}
                time={time} onTime={setTime}
                capital={capital} onCapital={setCapital}
                lifeInsurance={lifeInsurance} onLifeInsurance={setLifeInsurance}
                carInsurance={carInsurance} onCarInsurance={setCarInsurance}
                counter={counter} onCounter={setCounter}
                errors={errors} onErrors={setErrors}

            />
        );
    
    }
    return CalculatorState;
}

export default CalculatorHoc