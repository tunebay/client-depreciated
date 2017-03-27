import {
  ADD_TRACK_TO_PLAYER
} from './types';

export const addTrackToPlayer = (track) => {
  return { type: ADD_TRACK_TO_PLAYER, payload: track };
};
