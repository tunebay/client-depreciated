import axios from 'axios';
import v4 from 'node-uuid';
import {
  SET_IMAGE,
  SET_SCALE,
  SET_SCALED_IMAGE,
  UPDATE_IMAGE_POSITION,
  ARTWORK_UPLOAD_COMPLETE,
  ARTWORK_UPLOAD_STARTED,
  ARTWORK_UPLOAD_ERROR
} from '../types';

const API_URL = 'http://localhost:3000';

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

export const uploadImageToS3 = (image) => {
  return (dispatch) => {
    dispatch({ type: ARTWORK_UPLOAD_STARTED });
    const filename = `users/artwork/${v4()}`;
    axios.get(`${API_URL}/upload/s3/sign`, {
      params: { filename, filetype: image.type }
    })
    .then((res) => {
      const config = {
        headers: { 'Content-Type': image.type },
      };
      return axios.put(res.data.signedURL, image, config);
    })
    .then((res) => {
      console.log('ARTWORK RES', res);
      const location = res.config.url.split('?')[0];
      dispatch({ type: ARTWORK_UPLOAD_COMPLETE, payload: location });
    })
    .catch((err) => {
      console.log('UPLOAD ERROR', err);
      dispatch({ type: ARTWORK_UPLOAD_ERROR, payload: err });
    });
  };
};
