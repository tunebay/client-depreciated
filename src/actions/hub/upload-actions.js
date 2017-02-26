import { v4 } from 'node-uuid';
import { arrayMove } from 'react-sortable-hoc';
import axios from 'axios';
import {
  UPDATE_UPLOAD_PROGRESS,
  UPDATE_PLAYLIST_ORDER,
  UPLOAD_ERROR,
  UPLOAD_STARTED,
  FULL_UPLOAD_COMPLETE,
  STOP_UPDATING_PROGRESS,
} from '../types';

const API_URL = 'http://localhost:3000';

export const uploadAudioToS3 = (tracks) => {
  let uploadCounter = 0;
  return (dispatch) => {
    const playlist = [];
    tracks.forEach((file, index) => {
      const track = {
        name: file.name,
        originalIndex: index,
        playlistIndex: index,
        progress: 0
      };
      playlist.push(track);
    });
    dispatch({ type: UPLOAD_STARTED, payload: playlist });

    tracks.forEach((file, index) => {
      const filename = `users/music/${v4()}`;
      axios.get(`${API_URL}/upload/s3/sign`, {
        params: {
          filename,
          filetype: file.type
        }
      })
      .then((res) => {
        const signedURL = res.data.signedURL;

        const config = {
          headers: { 'Content-Type': file.type },
          onUploadProgress: (progress) => {
            const percentCompleted = Math.round((progress.loaded * 100) / progress.total);
            console.log(file.name, percentCompleted);
            dispatch({ type: UPDATE_UPLOAD_PROGRESS, payload: percentCompleted, originalIndex: index });
          }
        };

        return axios.put(signedURL, file, config);
      })
      .then((res) => {
        uploadCounter += 1;
        console.log(`${uploadCounter} / ${tracks.length}`);
        console.log('track upload complete:', res);
        if (uploadCounter === tracks.length) {
          dispatch({ type: FULL_UPLOAD_COMPLETE });
        }
      })
      .catch((err) => {
        dispatch({ type: UPLOAD_ERROR, payload: err });
      });
    });
  };
};

export const updateTrackPositions = (tracks, oldIndex, newIndex) => {
  console.log('UPDATING TRACK POSITION');
  const newPlaylistOrder = arrayMove(tracks, oldIndex, newIndex);
  newPlaylistOrder.forEach((track, index) => {
    console.log('track logging:', track);
    track.playlistIndex = index;
  });
  console.log('new order:', newPlaylistOrder);
  return { type: UPDATE_PLAYLIST_ORDER, payload: newPlaylistOrder };
};

export const stopUpdatingProgress = () => {
  console.log('stop uping progress...');
  return { type: STOP_UPDATING_PROGRESS };
};

export const updateTrackName = (tracks, index, input) => {
  const newPlaylist = [...tracks];
  const trackToUpdate = tracks[index];
  trackToUpdate.name = input;
  newPlaylist.splice(index, 1, trackToUpdate);
  return { type: UPDATE_PLAYLIST_ORDER, payload: newPlaylist };
};
