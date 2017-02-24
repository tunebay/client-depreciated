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
  originalTracks: [],
  playlistLength: 0
};

export default (state = INITITAL_STATE, action) => {
  switch (action.type) {
    case UPLOAD_STARTED:
      return {
        ...state,
        uploadStarted: true,
        tracks: action.payload,
        originalTracks: action.payload,
        playlistLength: action.payload.length
      };
    case UPDATE_UPLOAD_PROGRESS: {
      const trackToUpdate = state.originalTracks[action.originalIndex];
      console.log('Track to update: ', trackToUpdate);
      trackToUpdate.progress = action.payload;
      // console.log('index:', action.index);
      const newTracks = [...state.tracks];
      newTracks.splice(trackToUpdate.playlistIndex, 1, trackToUpdate);
      // console.log('New tracskkkss: ', newTracks);
      return { ...state, tracks: newTracks };
    }
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
