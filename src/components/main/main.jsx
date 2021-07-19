import React from 'react';

import Header from '../header/header';
import Footer from '../footer/footer';
//import Slider from '../slider/slider';
import Deposits from '../deposits/deposits';
import Credit from '../credit/credit';
import Insurance from '../insurance/insurance';
import OnlineService from '../online-service/online-service';

//import Tabs from '../tabs/tabs';

//import Department from '../department/department';

const Main = () => {
    return (
        <>
          <Header />
          <main className="main">
              <h1 className="main__title visually-hidden">Лига Банк</h1>
  
          <Deposits />
          <Credit />
          <Insurance />
          <OnlineService/>
              

          </main>
          <Footer />
      </>
    );
  };
  
  export default Main;