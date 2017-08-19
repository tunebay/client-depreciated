import React from 'react';
import ReactDOM from 'react-dom';
import 'es6-shim';
import { Provider } from 'react-redux';
import App from './components/App';
import './styles/normalize.css';
import './styles/app.scss';
import configureStore from './configure-store';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root'),
);
