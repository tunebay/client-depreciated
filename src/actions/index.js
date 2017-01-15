import axios from 'axios';
import { AUTH_USER } from './types';

const ROOT_URL = 'http://localhost:3000';

export const loginUser = ({ emailOrUsername, password }) => {
  return (dispatch) => {
    axios.post(`${ROOT_URL}/login`, { emailOrUsername, password })
      .then((res) => {
        dispatch({ type: AUTH_USER });
        localStorage.setItem('token', res.data.token);
      })
      .catch((err) => {
        console.log(err.message || err);
      });
  };
};

export const signupUser = () => {
  console.log('Signing up');
};
