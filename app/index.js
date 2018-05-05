import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import petFinderApp from './reducers';
import App from './views/App.jsx';

const middleware = applyMiddleware(thunk);

const store = createStore(
  petFinderApp, 
  compose(middleware)
  // compose(
  //   middleware,
  //   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  // )
);

render(
  <Provider store={store}>
    <Router>
      <Route path="/:filter?" component={App} />
    </Router>
  </Provider>,
  document.getElementById('root')
);