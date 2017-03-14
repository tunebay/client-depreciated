import { arrayMove } from 'react-sortable-hoc';
import axios from 'axios';
import v4 from 'node-uuid';
import {
  ADD_TRACK,
  UPDATE_PLAYLIST_POSITIONS,
  UPDATE_TRACK_PROGRESS,
  ADD_TRACK_LOCATION
} from '../types';

const API_URL = 'http://localhost:3000';

let playlistPosition = 0;
let trackId = 0;
let trackProcessCounter = 0;

export const addTracksToPlaylist = (files) => {
  return (dispatch, getState) => {
    files.forEach((file) => {
      const audio = document.createElement('AUDIO');
      audio.src = file.preview;
      audio.addEventListener('loadedmetadata', () => {
        const track = {
          name: file.name,
          playlistPosition: playlistPosition += 1,
          trackId: trackId += 1,
          duration: Math.round(audio.duration),
          file
        };
        trackProcessCounter += 1;
        dispatch({ type: ADD_TRACK, payload: track });
        if (trackProcessCounter === files.length) {
          uploadFilesToS3(getState().uploadedPlaylist, dispatch);
        }
      });
    });
  };
};

export const updateTrackPosition = (playlist, oldIndex, newIndex) => {
  const newOrderPlaylist = arrayMove(playlist, oldIndex, newIndex);
  return { type: UPDATE_PLAYLIST_POSITIONS, payload: newOrderPlaylist };
};

// Helpers
const uploadFilesToS3 = (playlist, dispatch) => {
  let uploadCounter = 0;
  playlist.forEach((track) => {
    const filename = `users/music/${v4()}`;
    axios.get(`${API_URL}/upload/s3/sign`, {
      params: {
        filename,
        filetype: track.file.type
      }
    })
    .then((res) => {
      const signedURL = res.data.signedURL;

      const config = {
        headers: { 'Content-Type': track.file.type },
        onUploadProgress: (progress) => {
          const percentCompleted = Math.round((progress.loaded * 100) / progress.total);
          // console.log(track.file.name, percentCompleted);
          dispatch({ type: UPDATE_TRACK_PROGRESS, payload: percentCompleted, trackId: track.trackId });
        }
      };

      return axios.put(signedURL, track.file, config);
    })
    .then((res) => {
      uploadCounter += 1;
      console.log(`${uploadCounter} / ${playlist.length}`);
      console.log('track upload complete:', res);
      const location = res.config.url.split('?')[0];
      dispatch({ type: ADD_TRACK_LOCATION, payload: location, trackId: track.trackId });
      if (uploadCounter === playlist.length) {
        console.log('full upload complete');
        // dispatch({ type: FULL_UPLOAD_COMPLETE });
      }
    })
    .catch((err) => {
      console.log(err);
      // dispatch({ type: UPLOAD_ERROR, payload: err });
    });
  });
};
