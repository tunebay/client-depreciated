import { SET_IMAGE, SET_SCALE, SET_SCALED_IMAGE } from '../types';

export const setImagePreview = (image) => {
  return { type: SET_IMAGE, payload: image };
};

export const setScale = (scale) => {
  return { type: SET_SCALE, payload: scale };
};

export const setScaledImage = (scaledImage) => {
  return { type: SET_SCALED_IMAGE, payload: scaledImage };
};
