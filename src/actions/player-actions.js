import {
  ADD_TRACK_TO_PLAYER,
  UPDATE_TRACK_MILLISECONDS,
  UPDATE_TRACK_MILI_POSITION,
  UPDATE_PLAY_STATUS
} from './types';

export const addTrackToPlayer = (track, tracks) => {
  return { type: ADD_TRACK_TO_PLAYER, payload: track, tracks };
};

export const updateTrackMilliseconds = (e) => {
  return {
    type: UPDATE_TRACK_MILLISECONDS,
    position: e.position,
    duration: e.duration
  };
};

export const updatePlayedSeconds = (seconds) => {
  return {
    type: 'UPDATE_PLAYED_SECONDS',
    payload: seconds
  };
};

export const updatePlayStatus = (status) => {
  return { type: UPDATE_PLAY_STATUS, payload: status };
};

export const updateDuration = (duration) => {
  return { type: 'UPDATE_DURATION', payload: duration };
};

export const updateProgress = (progress) => {
  return { type: 'UPDATE_PROGRESS', payload: progress };
};

export const updateArtworkLoadStatus = () => {
  return { type: 'UPDATE_ARTWORK_LOAD_STATUS' };
};
