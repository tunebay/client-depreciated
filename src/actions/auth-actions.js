import axios from 'axios';
import { browserHistory } from 'react-router';
import _ from 'lodash';
import { store } from '../';
import {
  AUTH_USER,
  AUTH_ERROR,
  DEAUTH_USER,
  SIGNUP_ATTEMPT,
  EMAIL_VALIDATING,
  USERNAME_VALIDATING,
  USERNAME_ERROR,
  EMAIL_ERROR
} from './types';

const API_URL = 'http://localhost:3000';

export const loginUser = ({ emailOrUsername, password }) => {
  return (dispatch) => {
    axios.post(`${API_URL}/login`, { emailOrUsername, password })
      .then((res) => {
        dispatch({ type: AUTH_USER });
        console.log(res);
        localStorage.setItem('token', res.data.token);
        browserHistory.push('/');
      })
      .catch(() => {
        dispatch(authError('Incorrect log in details.'));
      });
  };
};

export const logoutUser = () => {
  localStorage.removeItem('token');
  return { type: DEAUTH_USER };
};

export const signupUser = ({ displayName, email, password, username }) => {
  return (dispatch) => {
    dispatch({ type: SIGNUP_ATTEMPT });
    axios.post(`${API_URL}/signup`, { displayName, email, password, username })
      .then((res) => {
        dispatch({ type: AUTH_USER });
        localStorage.setItem('token', res.data.token);
        browserHistory.push('/');
      })
      .catch((res) => {
        dispatch(authError(res.response.data.error));
      });
  };
};

export const uniqueUsernameCheck = _.debounce(({ username }) => {
  store.dispatch({ type: USERNAME_VALIDATING });
  axios.post(`${API_URL}/signup/usernamecheck`, { username })
    .then((res) => {
      store.dispatch({ type: USERNAME_ERROR, payload: res.data.error });
    })
    .catch((error) => {
      console.log('In error:', error);
    });
}, 500);

export const uniqueEmailCheck = _.debounce(({ email }) => {
  store.dispatch({ type: EMAIL_VALIDATING });
  axios.post(`${API_URL}/signup/emailcheck`, { email })
    .then((res) => {
      store.dispatch({ type: EMAIL_ERROR, payload: res.data.error });
    })
    .catch((error) => {
      console.log('In error:', error);
    });
}, 500);


const authError = (error) => {
  return {
    type: AUTH_ERROR,
    payload: error
  };
};
