import {
  UPDATE_TRACK_NAME,
  UPDATE_SINGLE_STATUS,
  UPDATE_TRACK_PRICE,
  DELETE_TRACK
} from './types';

export const updateTrackName = (input, trackId) => {
  return { type: UPDATE_TRACK_NAME, payload: input, trackId };
};

export const updateSingleStatus = (status, trackId) => {
  return { type: UPDATE_SINGLE_STATUS, payload: status, trackId };
};

export const updateTrackPrice = (price, trackId) => {
  return { type: UPDATE_TRACK_PRICE, payload: price, trackId };
};

export const deleteTrack = (trackId) => {
  return { type: DELETE_TRACK, payload: trackId };
};
