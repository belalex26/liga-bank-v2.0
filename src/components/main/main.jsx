import React from 'react';

import Header from '../header/header';
import Footer from '../footer/footer';
import Department from '../department/department';

const Main = () => {
    return (
        <>
          <Header />
          <main className="main">
              <h1 className="main__title visually-hidden">Лига Банк</h1>
              <Department />
              
          </main>
          <Footer />
      </>
    );
  };
  
  export default Main;