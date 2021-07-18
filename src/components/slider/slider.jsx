import React from 'react';
//import { Link } from 'react-router-dom';

const Slider = () => {
    return (
        <section className="slider">
            <h2 className=" slider__section-title visually-hidden">Промо</h2>
            <div className="slider__item slider__item--one">
                <div className="slider__container">
                    <p className="slider__title">Лига Банк</p>
                    <p className="slider__text">Кредиты на любой случай</p>
                    <a className="slider__link slider__link-btn" href="/calculate">Рассчитать кредит</a>
                </div>
            </div>

            <div className="slider__item slider__item--two">
                <div className="slider__container">
                    <p className="slider__title slider__title--grey">Лига Банк</p>
                    <p className="slider__text slider__text--grey">Ваша уверенность в завтрашнем дне</p>
                </div>
            </div>

            <div className="slider__item slider__item--three">
                <div className="slider__container">
                    <p className="slider__title slider__title--grey">Лига Банк</p>
                    <p className="slider__text slider__text--grey">Всегда рядом</p>
                    <a className="slider__link slider__link--blue" href="/calculate">Найти отделение</a>
                </div>
            </div>

        </section>

    );
  };
  
  export default Slider;