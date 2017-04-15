import axios from 'axios';
import v4 from 'node-uuid';

const API_URL = 'http://localhost:3000';

export const showArtworkModal = (image) => {
  return { type: 'SHOW_ARTWORK_MODAL', payload: image.preview };
};

export const hideArtworkModal = () => {
  return { type: 'HIDE_ARTWORK_MODAL' };
};

export const saveArtwork = (artwork) => {
  return (dispatch) => {
    const dataURL = artwork.toDataURL('image/png');
    const image = dataURLtoBlob(dataURL);
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
      console.log('IMAGE LOCATION', location);
      dispatch({ type: 'SAVE_ARTWORK', dataURL, image });
      // dispatch({ type: ARTWORK_UPLOAD_COMPLETE, payload: location });
    })
    .catch((err) => {
      console.log('UPLOAD ERROR', err);
      // dispatch({ type: ARTWORK_UPLOAD_ERROR, payload: err });
    });
  };
};

// private

const uploadImageToS3 = (image) => {
  return (dispatch) => {
    // dispatch({ type: ARTWORK_UPLOAD_STARTED });
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
      console.log('IMAGE LOCATION', location);
      // dispatch({ type: ARTWORK_UPLOAD_COMPLETE, payload: location });
    })
    .catch((err) => {
      console.log('UPLOAD ERROR', err);
      // dispatch({ type: ARTWORK_UPLOAD_ERROR, payload: err });
    });
  };
};


const dataURLtoBlob = (dataurl) => {
  var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
    bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
  while(n--){
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new Blob([u8arr], { type: mime });
};
