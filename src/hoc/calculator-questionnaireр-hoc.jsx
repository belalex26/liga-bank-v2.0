import React, {useState, useEffect} from 'react';

const CalculatorQuestionnaireHoc = (Component) => {
    
    const CalculatorQuestionnaireState = (props) => {
        const [successActive, setSuccessActive] = useState(false)

           useEffect(() => {
            const body = document.querySelector('body');
            body.style.overflow = successActive ? 'hidden' : 'auto';
        }, [successActive])


        return (
            <Component
                successActive={successActive} onSuccessActive={setSuccessActive}
                counter={props.counter}
                onCounter={props.onCounter}
                questionnaireActive={props.questionnaireActive}
                onQuestionnaireActive={props.onQuestionnaireActive}
            />
        );
    
    }
    return CalculatorQuestionnaireState;
}

export default CalculatorQuestionnaireHoc;