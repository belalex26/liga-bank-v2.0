import React from 'react';
import PropTypes from 'prop-types';

import mainHoc from '../../hoc/main-hoc';
import Header from '../header/header';
import Calculator from '../calculator/calculator';
import Footer from '../footer/footer';
import Slider from '../slider/slider';
import ServicesSlider from '../services-slider/services-slider';
import Tabs from '../tabs/tabs';
import Department from '../department/department';

const BREAKPOINT = 1023;

const Main = ({...props}) => {

  const onRenderIfBreakoint = () => {
    if (props.width < BREAKPOINT) {
      return (
        <ServicesSlider />
      );
    }
    return (
      <Tabs />
    );
  };

  return (
    <>
      <Header />
      <main className="main">
        <h1 className="main__title visually-hidden">Лига Банк</h1>

        <Slider
          width={props.width}
        />
        {onRenderIfBreakoint()}
        <Calculator />
        <Department />
        <Footer />

      </main>

    </>
  );
};

Main.propTypes = {
  width: PropTypes.number,
};

export default mainHoc(Main);
