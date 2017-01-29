import axios from 'axios';
import {
  LOAD_USER
} from './types';

const API_URL = 'http://localhost:3000';

export const loadUser = (username) => {
  return (dispatch) => {
    axios.get(`${API_URL}/user/${username}`)
    .then((res) => {
      dispatch({ type: LOAD_USER, payload: res.data.user });
    })
    .catch((err) => {
      console.log(err.response.data.error);
    });
  };
};
