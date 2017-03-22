import axios from 'axios';
import {
  MOUNT_USER,
  UPDATE_SCROLL_POSITION
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
      console.log('ERROR', err);
    });
  };
};

export const updateScrollPosition = (x, y) => {
  return { type: UPDATE_SCROLL_POSITION, x, y };
};
