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
        console.log('in error');
        dispatch(authError('Incorrect log in details.'));
      });
  };
};

export const signupUser = () => {
  console.log('Signing up');
};

// helpers

const authError = (error) => {
  console.log('dispatching...');
  return {
    type: AUTH_ERROR,
    payload: error
  };
};
