import { arrayMove } from 'react-sortable-hoc';
import axios from 'axios';
import v4 from 'node-uuid';
import {
  ADD_TRACK,
  ADD_TRACK_LOCATION,
  UPDATE_PLAYLIST_POSITIONS,
  UPDATE_TRACK_PROGRESS,
  UPDATE_PLAYLIST_LENGTH,
  AUDIO_UPLOAD_ERROR,
  AUDIO_UPLOAD_STARTED,
  AUDIO_UPLOAD_FINISHED
} from '../types';

const API_URL = 'http://localhost:3000';

let playlistPosition = 0;
let trackId = 0;
let trackProcessCounter = 0;

export const addTracksToPlaylist = (files, userId) => {
  return (dispatch, getState) => {
    files.forEach((file) => {
      const audio = document.createElement('AUDIO');
      audio.src = file.preview;
      audio.addEventListener('loadedmetadata', () => {
        const track = {
          name: file.name.substr(0, file.name.lastIndexOf('.')) || file.name,
          playlistPosition: playlistPosition += 1,
          fileType: file.type,
          trackId: trackId += 1,
          duration: Math.round(audio.duration),
          file
        };
        trackProcessCounter += 1;
        dispatch({ type: ADD_TRACK, payload: track });
        if (trackProcessCounter === files.length) {
          dispatch({ type: UPDATE_PLAYLIST_LENGTH, payload: trackProcessCounter });
          uploadFilesToS3(getState().uploadedPlaylist, dispatch, userId);
        }
      });
    });
  };
};

export const updateTrackPosition = (playlist, oldIndex, newIndex) => {
  const newOrderPlaylist = arrayMove(playlist, oldIndex, newIndex);
  return { type: UPDATE_PLAYLIST_POSITIONS, payload: newOrderPlaylist };
};

export const releasePlaylist = (playlistDetails, playlistTracks) => {
  const durationArray = playlistTracks.map((track) => {
    return track.duration;
  });
  const playlistDuration = durationArray.reduce((a, b) => { return a + b; });

  const playlistToPost = {
    // required
    title: playlistDetails.title,
    playlistType: playlistDetails.playlistType,
    price: playlistDetails.price,
    canPayMore: playlistDetails.canPayMore,
    numberOfTracks: playlistTracks.length,
    duration: playlistDuration,
    // not required
    releaseDate: playlistDetails.releaseDate || null,
    description: playlistDetails.description || null,
    purchaseMessage: playlistDetails.purchaseMessage || null
  };
  console.log(playlistToPost);
  return {};
};

// Helpers
const uploadFilesToS3 = (playlist, dispatch, userId) => {
  dispatch({ type: AUDIO_UPLOAD_STARTED });
  let uploadCounter = 0;
  playlist.forEach((track) => {
    const filename = `users/${userId}/music/${v4()}`;
    axios.get(`${API_URL}/upload/s3/sign`, {
      params: { filename, filetype: track.file.type }
    })
    .then((res) => {
      const config = {
        headers: { 'Content-Type': track.file.type },
        onUploadProgress: (progress) => {
          const percentCompleted = Math.round((progress.loaded * 100) / progress.total);
          dispatch({
            type: UPDATE_TRACK_PROGRESS,
            payload: percentCompleted,
            trackId: track.trackId
          });
        }
      };
      return axios.put(res.data.signedURL, track.file, config);
    })
    .then((res) => {
      uploadCounter += 1;
      const location = res.config.url.split('?')[0];
      dispatch({ type: ADD_TRACK_LOCATION, payload: location, trackId: track.trackId });
      if (uploadCounter === playlist.length) {
        dispatch({ type: AUDIO_UPLOAD_FINISHED });
      }
    })
    .catch((err) => {
      console.log('UPLOAD ERROR', err);
      dispatch({ type: AUDIO_UPLOAD_ERROR, payload: err });
    });
  });
};
