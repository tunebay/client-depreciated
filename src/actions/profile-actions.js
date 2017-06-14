import axios from 'axios';
import {
  MOUNT_USER,
  USER_DOESNT_EXIST,
  FINDING_USER
} from './types';

const API_URL = 'http://localhost:3000/api/v1';

export const findUser = (username) => {
  return (dispatch) => {
    dispatch({ type: FINDING_USER });
    axios.get(`${API_URL}/users/${username}/playlists`)
    .then((res) => {
      console.log('RES', res);
      dispatch({ type: MOUNT_USER, payload: res.data.user });
    })
    .catch((err) => {
      dispatch({ type: USER_DOESNT_EXIST });
      console.log('PROFILE ERROR', err);
    });
  };
};
