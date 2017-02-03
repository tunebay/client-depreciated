import axios from 'axios';
import {
  UPDATE_UPLOAD_PROGRESS,
  UPLOAD_COMPLETE,
  UPLOAD_ERROR,
  UPLOAD_STARTED
} from '../types';

const API_URL = 'http://localhost:3000';

export const uploadAudioToS3 = (files) => {
  return (dispatch) => {
    dispatch({ type: UPLOAD_STARTED });
    const file = files[0];
    axios.get(`${API_URL}/upload/s3/sign`, {
      params: {
        filename: file.name,
        filetype: file.type
      }
    })
    .then((res) => {
      const signedURL = res.data.signedURL;

      const config = {
        headers: { 'Content-Type': file.type },
        onUploadProgress: (progress) => {
          const percentCompleted = Math.round((progress.loaded * 100) / progress.total);
          dispatch({ type: UPDATE_UPLOAD_PROGRESS, payload: percentCompleted });
        }
      };

      return axios.put(signedURL, file, config);
    })
    .then((res) => {
      dispatch({ type: UPLOAD_COMPLETE });
      console.log(res);
    })
    .catch((err) => {
      dispatch({ type: UPLOAD_ERROR, payload: err });
    });
  };
};