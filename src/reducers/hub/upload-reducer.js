import {
  UPDATE_UPLOAD_PROGRESS,
  UPLOAD_COMPLETE,
  UPLOAD_ERROR,
  UPLOAD_STARTED
} from '../../actions/types';

const INITITAL_STATE = {
  percentCompleted: null,
  error: '',
  uploadComplete: false,
  url: '',
  uploadStarted: false
};

export default (state = INITITAL_STATE, action) => {
  switch (action.type) {
    case UPLOAD_STARTED:
      return { ...INITITAL_STATE, uploadStarted: true };
    case UPDATE_UPLOAD_PROGRESS:
      return { ...INITITAL_STATE, percentCompleted: action.payload, uploadStarted: true };
    case UPLOAD_COMPLETE:
      return { ...INITITAL_STATE, uploadComplete: true, url: action.payload, uploadStarted: true };
    case UPLOAD_ERROR:
      return { ...INITITAL_STATE, error: action.payload };
    default:
      return state;
  }
};
