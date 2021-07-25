import React, {useState} from 'react';

const MortgageCalculatorHoc = (Component) => {
    
    const MortgageState = () => {

        const [contribution, setContribution] = useState(2000000);
        const [time, setTime] = useState(5);
        const [range, setRange] = useState(10);


        return (
            <Component 
                contribution={contribution} onContribution={setContribution}
                time={time} onTime={setTime}
                range={range} onRange={setRange}
            />
        );
    
    }
    return MortgageState;
}

export default MortgageCalculatorHoc