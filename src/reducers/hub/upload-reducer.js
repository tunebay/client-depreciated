import {
  UPDATE_PLAYLIST_LENGTH,
  AUDIO_UPLOAD_ERROR,
  AUDIO_UPLOAD_STARTED,
  AUDIO_UPLOAD_FINISHED
} from '../../actions/types';

const INITIAL_STATE = {
  error: '',
  uploadStarted: false,
  uploadInProgress: false,
  uploadFinished: false,
  playlistLength: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_PLAYLIST_LENGTH:
      return { ...state, playlistLength: action.payload };
    case AUDIO_UPLOAD_ERROR:
      return { ...state, error: action.payload };
    case AUDIO_UPLOAD_STARTED:
      return { ...state, uploadStarted: true, uploadInProgress: true };
    case AUDIO_UPLOAD_FINISHED:
      return { ...state, uploadFinished: true, uploadInProgress: false };
    default:
      return state;
  }
};
