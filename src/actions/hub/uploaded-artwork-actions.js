import { SET_IMAGE, SET_SCALE, SET_SCALED_IMAGE, UPDATE_IMAGE_POSITION } from '../types';

export const setImagePreview = (image) => {
  return { type: SET_IMAGE, payload: image };
};

export const setScale = (scale) => {
  return { type: SET_SCALE, payload: scale };
};

export const setScaledImage = (scaledImage) => {
  return { type: SET_SCALED_IMAGE, payload: scaledImage };
};

export const updatePosition = (e) => {
  return { type: UPDATE_IMAGE_POSITION, payload: e };
};
