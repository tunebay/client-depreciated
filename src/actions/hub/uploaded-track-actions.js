import {
  UPDATE_TRACK_NAME,
  UPDATE_SINGLE_STATUS,
  UPDATE_TRACK_PRICE
} from '../types';

export const updateTrackName = (input, trackId) => {
  return { type: UPDATE_TRACK_NAME, payload: input, trackId };
};

export const updateSingleStatus = (status, trackId) => {
  return { type: UPDATE_SINGLE_STATUS, payload: status, trackId };
};

export const updateTrackPrice = (price, trackId) => {
  return { type: UPDATE_TRACK_PRICE, payload: price, trackId };
};
