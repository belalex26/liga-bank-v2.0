import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import {Carousel} from 'react-responsive-carousel';

import Deposits from '../deposits/deposits';
import Credit from '../credit/credit';
import Insurance from '../insurance/insurance';
import OnlineService from '../online-service/online-service';

const ServicesSlider = () => {

  return (
    <section className="services-slider" id="services">
      <h2 className=" services-slider__title visually-hidden">Услуги</h2>
      <Carousel
        showArrows={false}
        showStatus={false}
        showThumbs={false}
        infiniteLoop={true}
        swipeable={true}
        interval={4000}
        autoPlay={true}
      >

        <div className="services-slider__item services-slider__item--one">
          <Deposits />
        </div>

        <div className="services-slider__item services-slider__item--two">
          <Credit />
        </div>

        <div className="services-slider__item services-slider__item--three">
          <Insurance />
        </div>

        <div className="services-slider__item services-slider__item--four">
          <OnlineService/>
        </div>


      </Carousel>
    </section>

  );
};

export default ServicesSlider;
