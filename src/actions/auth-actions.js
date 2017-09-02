import axios from 'axios';
import {
  AUTH_USER,
  AUTH_ERROR,
  DEAUTH_USER,
  SIGNUP_ATTEMPT,
  SET_CURRENT_USER,
  NEXT_SIGNUP_PAGE,
  SHOW_LOGIN_MODAL,
  HIDE_LOGIN_MODAL,
} from './types';

const AUTH_PATH = 'http://localhost:3000/api/v1/auth';

export const showLoginModal = () => {
  return { type: SHOW_LOGIN_MODAL };
};

export const hideLoginModal = () => ({ type: HIDE_LOGIN_MODAL });

export const nextSignupPage = (currentPage) => {
  return { type: NEXT_SIGNUP_PAGE, payload: currentPage + 1 };
};

export const loginUser = ({ emailOrUsername, password }) => {
  return (dispatch) => {
    axios
      .post(`${AUTH_PATH}/login`, { emailOrUsername, password })
      .then((res) => {
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('user', JSON.stringify(res.data.user));
        dispatch({ type: SET_CURRENT_USER, payload: res.data.user });
        dispatch({ type: AUTH_USER });
      })
      .catch((err) => {
        console.log('In login action catch:', err);
        dispatch(authError('Incorrect log in details.'));
      });
  };
};

export const logoutUser = () => {
  localStorage.clear();
  return { type: DEAUTH_USER };
};

export const signupUser = ({ displayName, email, password, username }) => {
  return (dispatch) => {
    dispatch({ type: SIGNUP_ATTEMPT });
    axios
      .post(`${AUTH_PATH}/register`, {
        displayName,
        email,
        password,
        username,
        provider: 'email',
      })
      .then((res) => {
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('user', JSON.stringify(res.data.user));
        dispatch({ type: SET_CURRENT_USER, payload: res.data.user });
        dispatch({ type: AUTH_USER });
      })
      .catch((res) => {
        dispatch(authError(res.response.data.error));
      });
  };
};

const authError = (error) => {
  return {
    type: AUTH_ERROR,
    payload: error,
  };
};
