import React, {useState, useEffect} from 'react';

const applications = [];

const CalculatorQuestionnaireHoc = (Component) => {
    
    const CalculatorQuestionnaireState = (props) => {
        const [successActive, setSuccessActive] = useState(false)
        const [applicationItems, setApplicationItems] = useState(JSON.parse(localStorage.getItem('applications')) || '[]')
        const [fullName, setFullName] = useState('');
        const [phone, setPhone] = useState('');
        const [email, setEmail] = useState('');


        useEffect(() => {
            setApplicationItems(applications);
        }, []);

        useEffect(() => {
            const body = document.querySelector('body');
            body.style.overflow = successActive ? 'hidden' : 'auto';
        }, [successActive])

        useEffect(() => {
            localStorage.setItem('applications', JSON.stringify(applicationItems))
         // eslint-disable-next-line react-hooks/exhaustive-deps
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
            />
        );
    
    }
    return CalculatorQuestionnaireState;
}

export default CalculatorQuestionnaireHoc;