import React from 'react';

import Header from '../header/header';
import Footer from '../footer/footer';

const NoPage = () => {
  return (
    <>
      <Header />
      <main className="no-page__content">
        <h1 className="no-page__title">404 Упс, похоже, такой страницы нет</h1>
      </main>
      <Footer />
    </>
  );
};

export default NoPage;
