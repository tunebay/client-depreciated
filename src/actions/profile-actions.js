import axios from 'axios';
import {
  MOUNT_USER
} from './types';

const API_URL = 'http://localhost:3000';

export const loadUser = (username) => {
  console.log('Loading user...');
  return (dispatch) => {
    axios.get(`${API_URL}/users/${username}`)
    .then((res) => {
      dispatch({ type: MOUNT_USER, user: res.data.user, playlists: res.data.playlists });
    })
    .catch((err) => {
      console.log(err.response.data.error);
    });
  };
};
