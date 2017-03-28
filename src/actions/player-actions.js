import {
  ADD_TRACK_TO_PLAYER,
  UPDATE_TRACK_MILLISECONDS,
  UPDATE_TRACK_MILI_POSITION
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

export const updateTrackMiliPosition = (e) => {
  return {
    type: UPDATE_TRACK_MILI_POSITION,
    payload: e
  };
};
