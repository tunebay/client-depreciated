import _ from 'lodash';
import ReduxThunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import { AUTH_USER } from './actions/types';
import { loadState, saveState } from './util/local-storage';

const configureStore = () => {
  const persistedState = loadState();
  const store = createStore(reducers, persistedState, applyMiddleware(ReduxThunk));

  store.subscribe(_.throttle(() => {
    saveState(store.getState().currentUser);
  }, 1000));

  const token = localStorage.getItem('token');

  if (token) {
    store.dispatch({ type: AUTH_USER });
  }

  return store;
};

export default configureStore;
