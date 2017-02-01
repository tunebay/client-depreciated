import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import { AUTH_USER } from './actions/types';

import reducers from './reducers';
import Router from './router';

import './styles/normalize.css';
import './styles/app.scss';

export const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
const token = localStorage.getItem('token');

if (token) {
  store.dispatch({ type: AUTH_USER });
}

ReactDOM.render(
  <Provider store={store}>
    <Router />
  </Provider>,
  document.querySelector('#root')
);
