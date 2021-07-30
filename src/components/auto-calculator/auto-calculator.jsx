import React from 'react';

import Rejection from '../rejection/rejection';
import Proposal from '../proposal/proposal';

const AutoCalculator = ({...props}) => {

    let price = parseFloat(props.price)
    let deposit = (Math.round(price * (props.contribution/100)))
    let contribution = (deposit / price) * 100
    let credit = price - deposit

    let depositValue = deposit.toString()

    if (price > 5000000) {
        props.onPrice(5000000)
    }

    const onButtonMinusClick = () => {
        if (price > 50000) {
            props.onPrice(price - 50000)
        }
    }

    const onButtonPlusClick = () => {
        if (price < 5000000) {
            props.onPrice((price + 50000))
        }
    }

    const renderProposal = () => {
        if (props.price && props.time) {
            if (credit < 200000) {
                return(
                    <Rejection target={props.target}/>
                )
            } else {
                return(
                    <Proposal
                        target={props.target}
                        credit={credit}
                        time={props.time}
                        lifeInsurance={props.lifeInsurance}
                        carInsurance={props.carInsurance}
                        questionnaireActive={props.questionnaireActive}
                        onQuestionnaireActive={props.onQuestionnaireActive}
                    />
                )
            }
        }
    }

    return (
        <>
            <fieldset className="calculator__form-step calculator__form-step--two">
                <legend className="calculator__form-title">Шаг 2. Введите параметры кредита</legend>

                <label className="calculator__form-label calculator__form-label--price">Стоимость автомобиля
                    <button className="calculator__form-btn calculator__form-btn--minus" type="button" onClick={onButtonMinusClick} ></button>
                    <input className="calculator__form-input" type="number" name="price" min='200000' max='5000000' value={props.price} onChange={((evt) => props.onPrice(evt.target.value))} placeholder="1 200 000 рублей"/>
                    <button className="calculator__form-btn calculator__form-btn--plus" type="button" onClick={onButtonPlusClick}></button>
                    <p className="calculator__form-text">От 500 000  до 5 000 000 рублей</p>   
                </label>

                <label className="calculator__form-label calculator__form-label--contribution">Первоначальный взнос
                    <input className="calculator__form-input" type="number" value={depositValue} onChange={((evt) => props.onContribution(evt.target.value))} placeholder="240 000 рублей"/>
                    <input className="calculator__form-range" type="range" name="contribution" min='20' step='5' value={contribution} onChange={((evt) => props.onContribution(evt.target.value))}  />
                    <p className="calculator__form-text">20%</p>
                </label>


                <label className="calculator__form-label">Срок кредитования
                    <input className="calculator__form-input" type="number" value={props.time} onChange={((evt) => props.onTime(evt.target.value))} placeholder="1 год"/>
                    <input className="calculator__form-range" type="range" name="period" min='1' max="5" step='1' value={props.time} onChange={((evt) => props.onTime(evt.target.value))} />
                    <div className="calculator__form-desc">
                        <p className="calculator__form-text">1 год</p>
                        <p className="calculator__form-text">5 лет</p>
                    </div>
                </label>

                <label className="calculator__form-label calculator__form-label--checkbox">
                    <input className="calculator__form-checkbox" type="checkbox" name="insurance" checked={props.carInsurance} onChange={() => props.onCarInsurance(!props.carInsurance)}/>
                    <p className="calculator__form-checkbox-text">Оформить КАСКО в нашем банке</p>
                </label>

                <label className="calculator__form-label calculator__form-label--checkbox">
                    <input className="calculator__form-checkbox" type="checkbox" name="insurance" checked={props.lifeInsurance} onChange={() => props.onLifeInsurance(!props.lifeInsurance)}/>
                    <p className="calculator__form-checkbox-text">Оформить Страхование жизни в нашем банке</p>
                </label>

            </fieldset>
            {renderProposal()}
        </>
    );
  };
  
  export default AutoCalculator;