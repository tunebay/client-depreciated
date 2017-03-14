import { UPDATE_TRACK_NAME } from '../types';

export const updateTrackName = (input, trackId) => {
  return { type: UPDATE_TRACK_NAME, payload: input, trackId };
};
