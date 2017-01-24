import axios from 'axios';
import { browserHistory } from 'react-router';
import { AUTH_USER, AUTH_ERROR, DEAUTH_USER } from './types';

const ROOT_URL = 'http://localhost:3000';

export const loginUser = ({ emailOrUsername, password }) => {
  return (dispatch) => {
    axios.post(`${ROOT_URL}/login`, { emailOrUsername, password })
      .then((res) => {
        dispatch({ type: AUTH_USER });
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
    axios.post(`${ROOT_URL}/signup`, { displayName, email, password, username })
      .then((res) => {
        dispatch({ type: AUTH_USER });
        localStorage.setItem('token', res.data.token);
        browserHistory.push('/');
      })
      .catch((err) => {
        // console.log(res);
        dispatch(authError(err));
      });
  };
};

// helpers

const authError = (error) => {
  console.log('ERROR IN AUTH:', error);
  return {
    type: AUTH_ERROR,
    payload: error
  };
};
