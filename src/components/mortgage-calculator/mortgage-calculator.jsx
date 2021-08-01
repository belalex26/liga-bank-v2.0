import React from 'react';

import Rejection from '../rejection/rejection';
import Proposal from '../proposal/proposal';

const MortgageCalculator = ({...props}) => {

    let price = parseFloat(props.price)
    let deposit = Math.round(price * (props.contribution/100))
    let credit = price - deposit

    
    if (price > 25000000) {
        props.onPrice(25000000)
    }

    const onButtonMinusClick = () => {
        if (price > 100000) {
            props.onPrice(price - 100000)
        }
    }

    const onButtonPlusClick = () => {
        if (price < 25000000) {
            props.onPrice((price + 100000))
        }
    }

    const renderProposal = () => {
        if (props.price && props.time) {
            if (credit < 500000) {
                return(
                    <Rejection target={props.target}/>
                )
            } else {
                return(
                    <Proposal
                        contribution={props.contribution}
                        target={props.target}
                        credit={credit}
                        price={props.price}
                        time={props.time}
                        capital={props.capital}
                        deposit={deposit}
                        questionnaireActive={props.questionnaireActive}
                        onQuestionnaireActive={props.onQuestionnaireActive}
                        counter={props.counter}
                        onCounter={props.onCounter}
                    />
                )
            }
        }
    }

    return (
        <>
            <fieldset className="calculator__form-step calculator__form-step--two">
                <legend className="calculator__form-title">Шаг 2. Введите параметры кредита</legend>

                <label className="calculator__form-label calculator__form-label--price">Стоимость недвижимости
                    <button className="calculator__form-btn calculator__form-btn--minus" type="button" onClick={onButtonMinusClick}></button>
                    <input className="calculator__form-input" type="text" name="price" min='1200000' max='25000000' value={props.price} onChange={((evt) => props.onPrice(evt.target.value))} placeholder="1 200 000 рублей" />
                    <button className="calculator__form-btn calculator__form-btn--plus" type="button" onClick={onButtonPlusClick}></button>
                    <p className="calculator__form-text">От 1 200 000  до 25 000 000 рублей</p>
                </label>

                <label className="calculator__form-label calculator__form-label--contribution">Первоначальный взнос
                    <input className="calculator__form-input"  type="number" value={deposit} onChange={((evt) => props.onPrice(evt.target.value))} placeholder="120 000 рублей"/>
                    <input className="calculator__form-range" type="range" name="contribution" min="10" step='5' value={props.contribution} onChange={((evt) => props.onContribution(evt.target.value))} />
                    <p className="calculator__form-text">10%</p>
                </label>

                <label className="calculator__form-label calculator__form-label--time">Срок кредитования
                    <input className="calculator__form-input" type="number"value={props.time} onChange={((evt) => props.onTime(evt.target.value))} placeholder="5 лет"/>
                    <input className="calculator__form-range" type="range" name="time" min="5" max="30" step="1" defaultValue={5} value={props.time} onChange={((evt) => props.onTime(evt.target.value))} />
                    <div className="calculator__form-desc">
                        <p className="calculator__form-text">5 лет</p>
                        <p className="calculator__form-text">30 лет</p>
                    </div>
                </label>

                <label className="calculator__form-label calculator__form-label--checkbox">
                    <input className="calculator__form-checkbox" type="checkbox" name="maternity capital" checked={props.capital} onChange={() => props.onCapital(!props.capital)}/>
                    <p className="calculator__form-checkbox-text">Использовать материнский капитал</p>
                </label>
            </fieldset>
            {renderProposal()}
        </>
    );
  };
  
  export default MortgageCalculator;