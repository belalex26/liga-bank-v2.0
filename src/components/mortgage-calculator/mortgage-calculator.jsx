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

    const onPriceValid = () => {
        if (price < 1200000) {
            return(
                <span className="calculator__form-error">Некорректное значение</span>
            )
        } else if (price > 25000000) {
            return(
                <span className="calculator__form-error">Некорректное значение</span>
            )
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
                        questionnaireActive={props.questionnaireActive} onQuestionnaireActive={props.onQuestionnaireActive}
                        counter={props.counter} onCounter={props.onCounter}
                    />
                )
            }
        }
    }

    return (
        <>
            <fieldset className="calculator__form-step calculator__form-step--two">
                <legend className="calculator__form-title">Шаг 2. Введите параметры кредита</legend>

                <div className="calculator__form-price">
                    <button className="calculator__form-btn calculator__form-btn--minus" type="button" onClick={onButtonMinusClick}></button>
                    <label className="calculator__form-label calculator__form-label--price">Стоимость недвижимости
                        {onPriceValid()}
                        <input className="calculator__form-input" type="text" name="price" value={props.price} onChange={((evt) => props.onPrice(evt.target.value))} placeholder="1 200 000 рублей" />
                    </label>
                    <button className="calculator__form-btn calculator__form-btn--plus" type="button" onClick={onButtonPlusClick}></button>
                    <p className="calculator__form-text">От 1 200 000  до 25 000 000 рублей</p>
                </div>

                <label className="calculator__form-label calculator__form-label--deposit">
                    <input className="calculator__form-input" type="number" name="deposit" value={deposit} onChange={((evt) => props.onPrice(evt.target.value))} placeholder="120 000 рублей"/>
                </label>

                <label className="calculator__form-label calculator__form-label--contribution">Первоначальный взнос
                    <input className="calculator__form-range" type="range" name="contribution" min="10" step='5' value={props.contribution} onChange={((evt) => props.onContribution(evt.target.value))} />
                    <span className="calculator__form-text">10%</span>
                </label>

                <label className="calculator__form-label calculator__form-label--time">Срок кредитования
                    <input className="calculator__form-input" type="number" value={props.time} onChange={((evt) => props.onTime(evt.target.value))} placeholder="5 лет"/>
                </label>

                <label className="calculator__form-label calculator__form-label--time-range">
                    <input className="calculator__form-range" type="range" name="time" min="5" max="30" step="1" defaultValue={1} value={props.time} onChange={((evt) => props.onTime(evt.target.value))} />
                </label>
                <div className="calculator__form-desc">
                    <p className="calculator__form-text">5 лет</p>
                    <p className="calculator__form-text">30 лет</p>
                </div>

                <label className="calculator__form-label calculator__form-label--checkbox">
                    <input className="calculator__form-checkbox" type="checkbox" name="maternity capital" checked={props.capital} onChange={() => props.onCapital(!props.capital)}/>
                    <span className="calculator__form-checkbox-text">Использовать материнский капитал</span>
                </label>
            </fieldset>
            {renderProposal()}
        </>
    );
  };
  
  export default MortgageCalculator;