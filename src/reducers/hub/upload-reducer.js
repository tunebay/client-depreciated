import {
  UPDATE_UPLOAD_PROGRESS,
  UPLOAD_COMPLETE,
  UPLOAD_ERROR
} from '../../actions/types';

const INITITAL_STATE = {
  percentCompleted: null,
  error: '',
  uploadComplete: false,
  url: ''
};

export default (state = INITITAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_UPLOAD_PROGRESS:
      return { ...INITITAL_STATE, percentCompleted: action.payload };
    case UPLOAD_COMPLETE:
      return { ...INITITAL_STATE, uploadComplete: true, url: action.payload };
    case UPLOAD_ERROR:
      return { ...INITITAL_STATE, error: action.payload };
    default:
      return state;
  }
};
