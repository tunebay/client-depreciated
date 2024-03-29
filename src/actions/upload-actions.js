import { arrayMove } from 'react-sortable-hoc';
import axios from 'axios';
import moment from 'moment';
import v4 from 'node-uuid';
import parameteriseString from '../util/parameterise-string';

import {
  ADD_TRACK,
  ADD_TRACK_LOCATION,
  UPDATE_PLAYLIST_POSITIONS,
  UPDATE_TRACK_PROGRESS,
  UPDATE_PLAYLIST_LENGTH,
  MULTI_UPLOAD_STARTED,
  SINGLE_UPLOAD_STARTED,
  AUDIO_UPLOAD_FINISHED,
  UPLOAD_ANOTHER_TRACK,
  ADD_ANOTHER_TRACK,
  PLAYLIST_RELEASE_SUCCESS,
  PLAYLIST_RELEASE_STARTED,
  SET_PAGE,
  TERMINATE_PLAYLIST_UPLOAD,
  SET_DEFAULT_VALUES,
  SET_PERMALINK,
  SHOW_ERROR_BANNER,
  ADD_TRACK_ERROR,
} from './types';

const API_URL = 'http://localhost:3000/api/v1';

let playlistPosition = 0;
let trackProcessCounter = 0;

// export const setPermalink = (parameterisedTitle, currentUser) => {
//   const permalink = `https://tunebay.com/${currentUser.username}/${parameterisedTitle}`;
//   return { type: SET_PERMALINK, payload: permalink };
// };

export const processAudio = (files) => {
  playlistPosition = 0;
  trackProcessCounter = 0;
  return files.length === 1
    ? handleSingleUpload(files[0])
    : addTracksToPlaylist(files);
};

export const setPage = (newPage) => {
  return { type: SET_PAGE, payload: newPage };
};

const handleSingleUpload = (file) => {
  return (dispatch) => {
    const audio = document.createElement('AUDIO');
    audio.src = file.preview;
    audio.addEventListener('loadedmetadata', () => {
      const track = {
        name: file.name.substr(0, file.name.lastIndexOf('.')) || file.name,
        playlistPosition: 1,
        fileType: file.type,
        trackId: v4(),
        duration: Math.round(audio.duration),
        file,
      };
      dispatch({ type: ADD_TRACK, payload: track });
      dispatch({ type: SINGLE_UPLOAD_STARTED });
      const title =
        file.name.substr(0, file.name.lastIndexOf('.')) || file.name;
      dispatch({
        type: SET_DEFAULT_VALUES,
        title,
        playlistType: { label: 'Single', value: 'single' },
        permalink: parameteriseString(title),
      });
      uploadSingleToS3(track, dispatch);
    });
  };
};

const addTracksToPlaylist = (files) => {
  return (dispatch, getState) => {
    dispatch({ type: SET_DEFAULT_VALUES, title: '', playlistType: '' });
    files.forEach((file) => {
      const audio = document.createElement('AUDIO');
      audio.src = file.preview;
      audio.addEventListener('loadedmetadata', () => {
        const track = {
          name: file.name.substr(0, file.name.lastIndexOf('.')) || file.name,
          playlistPosition: (playlistPosition += 1),
          fileType: file.type,
          trackId: v4(),
          duration: Math.round(audio.duration),
          file,
        };
        trackProcessCounter += 1;
        dispatch({ type: ADD_TRACK, payload: track });
        if (trackProcessCounter === files.length) {
          dispatch({
            type: UPDATE_PLAYLIST_LENGTH,
            payload: trackProcessCounter,
          }); // not needed
          uploadFilesToS3(getState().uploadedPlaylist, dispatch);
        }
      });
    });
  };
};

const uploadSingleToS3 = (track, dispatch) => {
  const filename = `users/music/${v4()}`;
  axios
    .get(`${API_URL}/aws/s3/sign`, {
      params: { filename, filetype: track.file.type },
    })
    .then((res) => {
      const config = {
        headers: { 'Content-Type': track.file.type },
        onUploadProgress: (progress) => {
          const percentCompleted = Math.round(
            progress.loaded * 100 / progress.total,
          );
          dispatch({
            type: UPDATE_TRACK_PROGRESS,
            payload: percentCompleted,
            trackId: track.trackId,
          });
        },
      };
      return axios.put(res.data.signedURL, track.file, config);
    })
    .then((res) => {
      const location = res.config.url.split('?')[0];
      dispatch({
        type: ADD_TRACK_LOCATION,
        payload: location,
        trackId: track.trackId,
      });
      dispatch({ type: AUDIO_UPLOAD_FINISHED });
    })
    .catch((err) => {
      console.log('UPLOAD ERROR', err);
      dispatch({ type: ADD_TRACK_ERROR, trackId: track.trackId });
      dispatch({
        type: SHOW_ERROR_BANNER,
        payload:
          'There was an issue with uploading one or more tracks. This is usually due to a network error',
      });
    });
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
        file,
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

export const releasePlaylist = (
  playlistDetails,
  playlistTracks,
  image,
  currentUser,
) => {
  return (dispatch) => {
    dispatch({ type: PLAYLIST_RELEASE_STARTED });
    const tracksToPost = processTracks(playlistTracks);
    // const releaseDate = moment(playlistDetails.releaseDate).format('YYYY-MM-DD HH:mm:ss');
    const permalink = `https://tunebay.com/${currentUser.username}/${playlistDetails.permalink ||
      parameteriseString(playlistDetails.title)}`;

    const durationArray = playlistTracks.map((track) => {
      return track.duration;
    });

    const playlistDuration = durationArray.reduce((a, b) => {
      return a + b;
    });
    const genreIds = playlistDetails.genres.map((genre) => {
      return genre.value;
    });

    if (image) {
      const filename = `users/artwork/${v4()}`;
      axios
        .get(`${API_URL}/aws/s3/sign`, {
          params: { filename, filetype: image.type },
        })
        .then((res) => {
          const artworkConfig = {
            headers: { 'Content-Type': image.type },
          };
          return axios.put(res.data.signedURL, image, artworkConfig);
        })
        .then((res) => {
          const artworkLocation = res.config.url.split('?')[0];
          const playlistToPost = {
            // required
            userId: currentUser.id,
            tracks: tracksToPost,
            title: playlistDetails.title,
            playlistType: playlistDetails.playlistType.value,
            price: parseFloat(playlistDetails.price),
            canPayMore: playlistDetails.canPayMore,
            numberOfTracks: playlistTracks.length,
            duration: playlistDuration,
            genreIds,
            permalink,
            createdAt: moment().format(),
            // not required
            artwork: artworkLocation || null,
            releaseDate: playlistDetails.releaseDate || null,
            purchaseMessage: playlistDetails.purchaseMessage || null,
          };
          const playlistConfig = {
            headers: { Authorization: localStorage.getItem('token') },
          };
          axios
            .post(`${API_URL}/playlists`, playlistToPost, playlistConfig)
            .then(() => {
              dispatch({ type: PLAYLIST_RELEASE_SUCCESS });
            });
        })
        .catch((err) => {
          dispatch({
            type: SHOW_ERROR_BANNER,
            payload:
              'There was an issue with posting your playlist. This is usually due to a network error',
          });
          console.log('Release Playlist ERROR', err);
        });
    } else {
      const artworkLocation = null;
      const playlistToPost = {
        // required
        userId: currentUser.id,
        tracks: tracksToPost,
        title: playlistDetails.title,
        playlistType: playlistDetails.playlistType.value,
        price: parseFloat(playlistDetails.price),
        canPayMore: playlistDetails.canPayMore,
        numberOfTracks: playlistTracks.length,
        duration: playlistDuration,
        genreIds,
        permalink,
        createdAt: moment().format(),
        // not required
        artwork: artworkLocation,
        releaseDate: playlistDetails.releaseDate || null,
        purchaseMessage: playlistDetails.purchaseMessage || null,
      };

      const playlistConfig = {
        headers: { Authorization: localStorage.getItem('token') },
      };
      axios
        .post(`${API_URL}/playlists`, playlistToPost, playlistConfig)
        .then((data) => {
          dispatch({ type: PLAYLIST_RELEASE_SUCCESS });
        })
        .catch((err) => {
          dispatch({
            type: SHOW_ERROR_BANNER,
            payload:
              'There was an issue with posting your playlist. This is usually due to a network error',
          });
          console.log('Release Playlist ERROR', err);
        });
    }
  };
};

export const terminateUpload = () => {
  return { type: TERMINATE_PLAYLIST_UPLOAD };
};

// Helpers
const uploadFilesToS3 = (playlist, dispatch) => {
  dispatch({ type: MULTI_UPLOAD_STARTED });
  let uploadCounter = 0;
  playlist.forEach((track) => {
    const filename = `users/music/${v4()}`;
    axios
      .get(`${API_URL}/aws/s3/sign`, {
        params: { filename, filetype: track.file.type },
      })
      .then((res) => {
        const config = {
          headers: { 'Content-Type': track.file.type },
          onUploadProgress: (progress) => {
            const percentCompleted = Math.round(
              progress.loaded * 100 / progress.total,
            );
            dispatch({
              type: UPDATE_TRACK_PROGRESS,
              payload: percentCompleted,
              trackId: track.trackId,
            });
          },
        };
        return axios.put(res.data.signedURL, track.file, config);
      })
      .then((res) => {
        uploadCounter += 1;
        const location = res.config.url.split('?')[0];
        dispatch({
          type: ADD_TRACK_LOCATION,
          payload: location,
          trackId: track.trackId,
        });
        if (uploadCounter === playlist.length) {
          dispatch({ type: AUDIO_UPLOAD_FINISHED });
        }
      })
      .catch((err) => {
        console.log('UPLOAD ERROR', err);
        dispatch({ type: ADD_TRACK_ERROR, trackId: track.trackId });
        dispatch({
          type: SHOW_ERROR_BANNER,
          payload:
            'There was an issue with uploading one or more tracks. This is usually due to a network error',
        });
      });
  });
};

const uploadAnotherFileToS3 = (track, dispatch) => {
  dispatch({ type: UPLOAD_ANOTHER_TRACK });
  const filename = `users/music/${v4()}`;
  axios
    .get(`${API_URL}/aws/s3/sign`, {
      params: { filename, filetype: track.file.type },
    })
    .then((res) => {
      const config = {
        headers: { 'Content-Type': track.file.type },
        onUploadProgress: (progress) => {
          const percentCompleted = Math.round(
            progress.loaded * 100 / progress.total,
          );
          dispatch({
            type: UPDATE_TRACK_PROGRESS,
            payload: percentCompleted,
            trackId: track.trackId,
          });
        },
      };
      return axios.put(res.data.signedURL, track.file, config);
    })
    .then((res) => {
      const location = res.config.url.split('?')[0];
      dispatch({
        type: ADD_TRACK_LOCATION,
        payload: location,
        trackId: track.trackId,
      });
      dispatch({ type: AUDIO_UPLOAD_FINISHED });
    })
    .catch((err) => {
      console.log('UPLOAD ERROR', err);
      dispatch({ type: ADD_TRACK_ERROR, trackId: track.trackId });
      dispatch({
        type: SHOW_ERROR_BANNER,
        payload:
          'Well this is awkward... There was an issue with uploading one or more tracks. This is usually due to a network error',
      });
    });
};

const processTracks = (tracks) => {
  tracks.map((track) => {
    if (!track.single) {
      track.price = null;
    } else {
      track.price = parseFloat(track.price);
    }
    if (tracks.length === 1) {
      track.single = true;
    }
    delete track.file;
    delete track.trackId;
    delete track.filename;
    delete track.progress;
    delete track.tickAnimationPlayed;
    return track;
  });
  return tracks;
};

export const setPermalinkString = (title) => {
  return { type: SET_PERMALINK, payload: parameteriseString(title) };
};
