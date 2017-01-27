import axios from 'axios';
import _ from 'lodash';
import { browserHistory } from 'react-router';
import {
  AUTH_USER,
  AUTH_ERROR,
  DEAUTH_USER,
  SIGNUP_ATTEMPT,
} from './types';

const API_URL = 'http://localhost:3000';

export const loginUser = ({ emailOrUsername, password }) => {
  return (dispatch) => {
    axios.post(`${API_URL}/login`, { emailOrUsername, password })
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
  axios.post(`${API_URL}/signup/usernamecheck`, { username })
    .then((res) => {
      console.log('Username uniqueness:', res.data.status);
    })
    .catch((error) => {
      console.log('In error:', error);
    });
}, 500);

export const uniqueEmailCheck = _.debounce(({ email }) => {
  axios.post(`${API_URL}/signup/emailcheck`, { email })
    .then((res) => {
      console.log('email uniqueness:', res.data.status);
    })
    .catch((error) => {
      console.log('In error:', error);
    });
}, 500);

// const usernameCheck = ({ username }) => {
//   axios.post(`${API_URL}/signup/usernamecheck`, { username })
//     .then((res) => {
//       console.log('In then:', res.data.status);
//     })
//     .catch((error) => {
//       console.log('In error:', error);
//     });
// };

// helpers

const authError = (error) => {
  return {
    type: AUTH_ERROR,
    payload: error
  };
};
