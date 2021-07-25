import React, {useState} from 'react';

const AutoCalculatorHoc = (Component) => {
    
    const AutoState = () => {

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
    return AutoState;
}

export default AutoCalculatorHoc