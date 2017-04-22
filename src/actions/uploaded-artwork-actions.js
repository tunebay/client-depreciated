import axios from 'axios';
import v4 from 'node-uuid';

const API_URL = 'http://localhost:3000';

export const showArtworkModal = (image) => {
  return { type: 'SHOW_ARTWORK_MODAL', payload: image.preview };
};

export const setScale = (scale) => {
  return { type: 'SET_SCALE', payload: scale };
};

export const hideArtworkModal = () => {
  return { type: 'HIDE_ARTWORK_MODAL' };
};

export const saveArtwork = (artwork) => {
  const dataURL = artwork.toDataURL('image/png');
  const image = dataURLtoBlob(dataURL);
  return { type: 'SAVE_ARTWORK', dataURL, image };
};

// private

const dataURLtoBlob = (dataurl) => {
  var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
    bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
  while(n--){
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new Blob([u8arr], { type: mime });
};
