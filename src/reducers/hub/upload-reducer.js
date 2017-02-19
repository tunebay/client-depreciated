import {
  UPDATE_UPLOAD_PROGRESS,
  TRACK_UPLOAD_COMPLETE,
  UPLOAD_ERROR,
  UPLOAD_STARTED,
  FULL_UPLOAD_COMPLETE
} from '../../actions/types';

const INITITAL_STATE = {
  percentCompleted: null,
  error: '',
  uploadComplete: false,
  url: '',
  uploadStarted: false,
  tracks: []
};

export default (state = INITITAL_STATE, action) => {
  switch (action.type) {
    case UPLOAD_STARTED:
      console.log('UPLOAD_STARTED:', action.payload);
      return { ...state, uploadStarted: true, tracks: action.payload };
    case UPDATE_UPLOAD_PROGRESS:
      return { ...state, percentCompleted: action.payload, uploadStarted: true };
    case UPLOAD_ERROR:
      return { ...INITITAL_STATE, error: action.payload };
    case FULL_UPLOAD_COMPLETE:
      console.log('upload complete');
      return { ...state, uploadComplete: true };
    default:
      return state;
  }
};
