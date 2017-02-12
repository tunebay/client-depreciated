import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import { AUTH_USER } from './actions/types';
import { loadState, saveState } from './util/local-storage';
import reducers from './reducers';
import Router from './router';
import './styles/normalize.css';
import './styles/app.scss';


const persistedState = loadState();
console.log('persisted user state:', persistedState);
export const store = createStore(reducers, persistedState, applyMiddleware(ReduxThunk));

store.subscribe(() => {
  saveState(store.getState().currentUser);
});

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
