import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import PropTypes from 'prop-types';

import Main from '../main/main';
import NoPage from '../no-page/no-page';

const App = ({...props}) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'
          component={Main}
          width={props.width}
          onWidth={props.onWidth}
        />
        <Route component={NoPage} />
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  width: PropTypes.number,
  onWidth: PropTypes.func,
};

export default App;
