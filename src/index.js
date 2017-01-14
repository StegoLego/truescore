import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, hashHistory } from 'react-router';
import routes from './routes';
import promise from 'redux-promise';
import reducers from './reducers/root_reducer';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

export const store = createStoreWithMiddleware(reducers);

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory} routes={routes}/>
  </Provider>, document.querySelector('#App'));
