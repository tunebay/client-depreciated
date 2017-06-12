import axios from 'axios';
import {
  MOUNT_USER,
  UPDATE_SCROLL_POSITION,
  USER_DOESNT_EXIST
} from './types';

const API_URL = 'http://localhost:3000/api/v1';

export const loadUser = (username) => {
  return (dispatch) => {
    axios.get(`${API_URL}/users/${username}/playlists`)
    .then((res) => {
      dispatch({ type: MOUNT_USER, user: res.data.user, playlists: res.data.playlists });
    })
    .catch((err) => {
      dispatch({ type: USER_DOESNT_EXIST });
      console.log('PROFILE ERROR', err);
    });
  };
};

export const updateScrollPosition = (x, y) => {
  return { type: UPDATE_SCROLL_POSITION, x, y };
};
