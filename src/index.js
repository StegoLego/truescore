import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import promise from 'redux-promise';

import reducers from './reducers';

import App from './components/app';


const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(<App />, document.querySelector('.container'));
