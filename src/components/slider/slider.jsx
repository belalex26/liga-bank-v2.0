import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


const SliderImage = ({...props}) => {
    
    return (
        <section className="slider">
            <h2 className=" slider__section-title visually-hidden">Промо</h2>
            <Carousel
                showArrows={false}
                showStatus={false}
                showThumbs={false}
                infiniteLoop={true}
                swipeable={true}
                interval={4000}
                autoPlay={true}
            >

                <div className="slider__item slider__item--one">
                    <div className="slider__container">
                        <p className="slider__title">Лига Банк</p>
                        <p className="slider__text">Кредиты на любой случай</p>
                        <a className="slider__link" href="#credit">Рассчитать кредит</a>
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
                        <a className="slider__link slider__link--blue" href="#department">Найти отделение</a>
                    </div>
                </div>
            </Carousel>
        </section>
    );
  };
  
  export default SliderImage;