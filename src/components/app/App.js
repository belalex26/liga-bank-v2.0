import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Main from '../main/main';
import NoPage from '../no-page/no-page';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Main} />
        <Route component={NoPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;