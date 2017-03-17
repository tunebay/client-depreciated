import {
  SET_IMAGE,
  SET_SCALE,
  SET_SCALED_IMAGE,
  UPDATE_IMAGE_POSITION,
  ARTWORK_UPLOAD_STARTED,
  ARTWORK_UPLOAD_COMPLETE
} from '../../actions/types';

const INITIAL_STATE = {
  image: null,
  disableClick: false,
  scale: 1.0,
  scaledImage: null,
  position: { x: 0.5, y: 0.5 },
  uploading: false,
  uploadStarted: false,
  uploadComplete: false,
  error: '',
  location: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_IMAGE:
      return { ...state, image: action.payload, disableClick: true };
    case SET_SCALE:
      return { ...state, scale: action.payload };
    case SET_SCALED_IMAGE:
      return { ...state, scaledImage: action.payload };
    case UPDATE_IMAGE_POSITION:
      return { ...state, position: action.payload };
    case ARTWORK_UPLOAD_STARTED:
      return { ...state, uplaodStarted: true, uploading: true, uploadComplete: false, disableClick: true };
    case ARTWORK_UPLOAD_COMPLETE:
      return { ...state, uploading: false, uploadComplete: true, location: action.payload };
    default:
      return state;
  }
};
