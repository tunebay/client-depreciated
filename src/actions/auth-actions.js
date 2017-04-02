import axios from 'axios';
import {
  AUTH_USER,
  AUTH_ERROR,
  DEAUTH_USER,
  SIGNUP_ATTEMPT,
  EMAIL_VALIDATING,
  USERNAME_VALIDATING,
  USERNAME_ERROR,
  EMAIL_ERROR,
  SET_CURRENT_USER,
  NEXT_SIGNUP_PAGE
} from './types';

const API_URL = 'http://localhost:3000';

export const nextSignupPage = (currentPage) => {
  console.log('IN NEXT SIGN UP PAGE');
  return { type: NEXT_SIGNUP_PAGE, payload: currentPage + 1 };
};

export const loginUser = ({ emailOrUsername, password }) => {
  return (dispatch) => {
    axios.post(`${API_URL}/login`, { emailOrUsername, password })
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
    axios.post(`${API_URL}/signup`, { displayName, email, password, username })
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

export const uniqueUsernameCheck = ({ username }) => {
  return (dispatch) => {
    dispatch({ type: USERNAME_VALIDATING });
    axios.post(`${API_URL}/signup/usernamecheck`, { username })
    .then((res) => {
      dispatch({ type: USERNAME_ERROR, payload: res.data.error });
    })
    .catch((error) => {
      console.log('In error:', error);
    });
  };
};

export const uniqueEmailCheck = ({ email }) => {
  return (dispatch) => {
    dispatch({ type: EMAIL_VALIDATING });
    axios.post(`${API_URL}/signup/emailcheck`, { email })
    .then((res) => {
      dispatch({ type: EMAIL_ERROR, payload: res.data.error });
    })
    .catch((error) => {
      console.log('In error:', error);
    });
  };
};


const authError = (error) => {
  return {
    type: AUTH_ERROR,
    payload: error
  };
};
