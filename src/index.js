import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';

import '../styles/normalize.css';

const App = () => {
  const store = createStore(() => {}, {}, applyMiddleware(ReduxThunk));

  return (
    <Provider store={store}>
      <div>Hi Tunebay</div>
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
