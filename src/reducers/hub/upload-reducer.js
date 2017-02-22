import {
  UPDATE_UPLOAD_PROGRESS,
  TRACK_UPLOAD_COMPLETE,
  UPDATE_PLAYLIST_ORDER,
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
  tracks: [],
  playlistLength: 0
};

export default (state = INITITAL_STATE, action) => {
  switch (action.type) {
    case UPLOAD_STARTED:
      return {
        ...state,
        uploadStarted: true,
        tracks: action.payload,
        playlistLength: action.payload.length
      };
    case UPDATE_UPLOAD_PROGRESS:
      return { ...state, percentCompleted: action.payload, uploadStarted: true };
    case UPLOAD_ERROR:
      return { ...INITITAL_STATE, error: action.payload };
    case FULL_UPLOAD_COMPLETE:
      return { ...state, uploadComplete: true };
    case UPDATE_PLAYLIST_ORDER:
      return { ...state, tracks: action.payload };
    default:
      return state;
  }
};
