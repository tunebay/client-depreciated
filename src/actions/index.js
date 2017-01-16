import axios from 'axios';
import { browserHistory } from 'react-router';
import { AUTH_USER, AUTH_ERROR } from './types';

const ROOT_URL = 'http://localhost:3000';

export const loginUser = ({ emailOrUsername, password }) => {
  return (dispatch) => {
    axios.post(`${ROOT_URL}/login`, { emailOrUsername, password })
      .then((res) => {
        dispatch({ type: AUTH_USER });
        localStorage.setItem('token', res.data.token);
        browserHistory.push('/feed');
      })
      .catch(() => {
        dispatchAuthError('Incorrect log in details.');
      });
  };
};

export const signupUser = () => {
  console.log('Signing up');
};

// helpers

const dispatchAuthError = (err) => {
  return {
    type: AUTH_ERROR,
    payload: err
  };
};
