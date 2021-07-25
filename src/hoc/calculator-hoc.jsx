import React, {useState} from 'react';

const CalculatorHoc = (Component) => {
    
    const CalculatorState = () => {
        const [target, setTarget] = useState('')
        const [selectActive , setSelectActive] = useState(false)
        const [priceMortgageState, setPriceMortgageState]= useState(2000000)
        const [counter, setCounter] = useState(1)


        return (
            <Component
                selectActive={selectActive} onSelectActive={setSelectActive}


                target={target} onTarget={setTarget}
                priceMortgageState={priceMortgageState} onPriceMortgageState={setPriceMortgageState}
                counter={counter} onCounter={setCounter}

            />
        );
    
    }
    return CalculatorState;
}

export default CalculatorHoc