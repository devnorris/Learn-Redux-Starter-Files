import React from 'react';

import { render } from 'react-dom';

// import css
import css from './styles/style.styl';

//import components
import App from './components/App';
import single from './components/single';
import PhotoGrid from './components/PhotoGrid';

// import react router deps
import { Router, Route, IndexRoute,  browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={PhotoGrid}></IndexRoute>
        <Route path="/view/:postid" component={single}></Route>
      </Route>
    </Router>
  </Provider>
)

render(
  router, document.getElementById('root')
);