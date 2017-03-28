import {
  ADD_TRACK_TO_PLAYER,
  UPDATE_TRACK_POSITION
} from './types';

export const addTrackToPlayer = (track, tracks) => {
  return { type: ADD_TRACK_TO_PLAYER, payload: track, tracks };
};

export const updateTrackPosition = (position) => {
  return { type: UPDATE_TRACK_POSITION, payload: position };
};
