import {
  ADD_TRACK_TO_PLAYER,
  UPDATE_TRACK_POSITION
} from './types';

export const addTrackToPlayer = (track) => {
  return { type: ADD_TRACK_TO_PLAYER, payload: track };
};

export const updateTrackPosition = (position) => {
  return { type: UPDATE_TRACK_POSITION, payload: position };
};
