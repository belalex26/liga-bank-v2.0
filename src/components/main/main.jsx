import React from 'react';

import MainHoc from '../../hoc/main-hoc';

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
      )
    } else {
      return (
        <Tabs />
      )
    }
  }

    return (
        <>
          <Header />
          <main className="main">
              <h1 className="main__title visually-hidden">Лига Банк</h1>

              <Slider 
                width={props.widt} breakpoint={BREAKPOINT}
              />
              {onRenderIfBreakoint()}
              <Calculator />
              <Department />
              <Footer />
              
          </main>
        
      </>
    );
  };
  
  export default MainHoc(Main);