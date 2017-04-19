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
  AUDIO_UPLOAD_FINISHED,
  UPLOAD_ANOTHER_TRACK,
  ADD_ANOTHER_TRACK,
  ANOTHER_UPLOAD_FINISHED
} from './types';

const API_URL = 'http://localhost:3000';

let playlistPosition = 0;
let trackProcessCounter = 0;

export const processAudio = (files) => {
  return files.length === 1 ?
    handleSingleUpload(files[0]) :
    addTracksToPlaylist(files);
};

export const setPage = (newPage) => {
  return { type: 'SET_PAGE', payload: newPage };
};

const handleSingleUpload = (file) => {
  console.log(file);
  return { type: 'SINGLE_UPLOAD_STARTED' };
};

const addTracksToPlaylist = (files, userId) => {
  return (dispatch, getState) => {
    files.forEach((file) => {
      const audio = document.createElement('AUDIO');
      audio.src = file.preview;
      audio.addEventListener('loadedmetadata', () => {
        const track = {
          name: file.name.substr(0, file.name.lastIndexOf('.')) || file.name,
          playlistPosition: playlistPosition += 1,
          fileType: file.type,
          trackId: v4(),
          duration: Math.round(audio.duration),
          file
        };
        trackProcessCounter += 1;
        dispatch({ type: ADD_TRACK, payload: track });
        if (trackProcessCounter === files.length) {
          dispatch({ type: UPDATE_PLAYLIST_LENGTH, payload: trackProcessCounter }); // not needed
          uploadFilesToS3(getState().uploadedPlaylist, dispatch, userId);
        }
      });
    });
  };
};

export const addAnotherTrack = (file, userId, currentPlaylist) => {
  return (dispatch) => {
    const audio = document.createElement('AUDIO');
    audio.src = file.preview;
    audio.addEventListener('loadedmetadata', () => {
      const track = {
        name: file.name.substr(0, file.name.lastIndexOf('.')) || file.name,
        playlistPosition: currentPlaylist.length + 1,
        fileType: file.type,
        trackId: v4(),
        duration: Math.round(audio.duration),
        file
      };
      uploadAnotherFileToS3(track, dispatch, userId);
      dispatch({ type: ADD_ANOTHER_TRACK, payload: track });
    });
  };
};

export const updateTrackPosition = (playlist, oldIndex, newIndex) => {
  const newOrderPlaylist = arrayMove(playlist, oldIndex, newIndex);
  return { type: UPDATE_PLAYLIST_POSITIONS, payload: newOrderPlaylist };
};

export const releasePlaylist = (playlistDetails, playlistTracks) => {
  return (dispatch) => {
    // dispatch({ type: POST_NEW_PLAYLIST });
    const tracksToPost = processTracks(playlistTracks);
    const durationArray = playlistTracks.map((track) => {
      return track.duration;
    });
    const playlistDuration = durationArray.reduce((a, b) => { return a + b; });
    let genre2Id;
    let genre3Id;
    if (playlistDetails.genres[1]) {
      genre2Id = playlistDetails.genres[1].value;
    }
    if (playlistDetails.genres[2]) {
      genre3Id = playlistDetails.genres[2].value;
    }
    const playlistToPost = {
      // required
      tracks: tracksToPost,

      title: playlistDetails.title,
      playlistType: playlistDetails.playlistType.value,
      price: playlistDetails.price,
      canPayMore: playlistDetails.canPayMore,
      numberOfTracks: playlistTracks.length,
      lengthInSeconds: playlistDuration,
      genre1Id: playlistDetails.genres[0].value,
      // not required
      genre2Id: genre2Id || null,
      genre3Id: genre3Id || null,
      releaseDate: playlistDetails.releaseDate || null,
      description: playlistDetails.description || null,
      purchaseMessage: playlistDetails.purchaseMessage || null
    };

    const config = { headers: { Authorization: localStorage.getItem('token') } };
    axios.post(`${API_URL}/playlists/new`, playlistToPost, config)
      .then((res) => {
        console.log('RESPONSE', res);
      })
      .catch((err) => {
        console.log('ERROR:', err);
      });
  };
};

// Helpers
const uploadFilesToS3 = (playlist, dispatch, userId) => {
  dispatch({ type: AUDIO_UPLOAD_STARTED });
  dispatch({ type: 'MULTI_UPLOAD_STARTED' });
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

const uploadAnotherFileToS3 = (track, dispatch, userId) => {
  dispatch({ type: UPLOAD_ANOTHER_TRACK });
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
    const location = res.config.url.split('?')[0];
    dispatch({ type: ADD_TRACK_LOCATION, payload: location, trackId: track.trackId });
    dispatch({ type: ANOTHER_UPLOAD_FINISHED });
  })
  .catch((err) => {
    console.log('UPLOAD ERROR', err);
    dispatch({ type: AUDIO_UPLOAD_ERROR, payload: err });
  });
};

const processTracks = (tracks) => {
  tracks.map((track) => {
    if (!track.isASingle) {
      track.price = null;
    }
    delete track.file;
    delete track.trackId;
    delete track.filename;
    delete track.progress;
    return track;
  });
  return tracks;
};
