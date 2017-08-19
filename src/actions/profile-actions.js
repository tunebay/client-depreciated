import axios from 'axios';
import {
  MOUNT_USER,
  USER_DOESNT_EXIST,
  FINDING_USER,
  UPDATE_COVER_BOTTOM,
} from './types';

const API_URL = 'http://localhost:3000/api/v1';

export const findUser = (username) => {
  return (dispatch) => {
    dispatch({ type: FINDING_USER });
    axios
      .get(`${API_URL}/users/${username}/playlists`)
      .then((res) => {
        dispatch({ type: MOUNT_USER, payload: res.data.user });
      })
      .catch((err) => {
        dispatch({ type: USER_DOESNT_EXIST });
        console.log('PROFILE ERROR', err);
      });
  };
};

export const findPlaylistByURL = (playlist) => {
  console.log('Find play list here:', playlist);
};

export const updateCoverBottom = (coverBottom) => {
  return {
    type: UPDATE_COVER_BOTTOM,
    payload: coverBottom,
  };
};

export const setCurrentPlaylist = (playlists, match) => {
  const playlistToSet = playlists.find((playlist) => {
    return playlist.permalink === `https://tunebay.com${match.url}`;
  });
  if (playlistToSet) {
    return { type: 'SET_PLAYLIST_PAGE_PLAYLIST', payload: playlistToSet };
  }
  return { type: 'PLAYLIST_DOESNT_EXIST' };
};
