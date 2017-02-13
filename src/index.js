import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import _ from 'lodash';
import { AUTH_USER } from './actions/types';
import { loadState, saveState } from './util/local-storage';
import reducers from './reducers';
import Router from './router';
import './styles/normalize.css';
import './styles/app.scss';

const persistedState = loadState();
export const store = createStore(reducers, persistedState, applyMiddleware(ReduxThunk));

store.subscribe(_.throttle(() => {
  saveState(store.getState().currentUser);
}, 1000));

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
