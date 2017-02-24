import {
  UPDATE_UPLOAD_PROGRESS,
  TRACK_UPLOAD_COMPLETE,
  UPDATE_PLAYLIST_ORDER,
  UPLOAD_ERROR,
  UPLOAD_STARTED,
  FULL_UPLOAD_COMPLETE,
  STOP_UPDATING_PROGRESS,
  START_UPDATING_PROGRESS
} from '../../actions/types';

const INITITAL_STATE = {
  percentCompleted: null,
  error: '',
  uploadComplete: false,
  url: '',
  uploadStarted: false,
  tracks: [],
  originalTracks: [],
  playlistLength: 0,
  dragging: false
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
    case UPDATE_UPLOAD_PROGRESS: { // wow. will refactor when i know how..(need another reducer??)
      if (state.dragging) { return { ...state }; }
      const trackToUpdate = state.originalTracks[action.originalIndex];
      trackToUpdate.progress = action.payload;
      const newTracks = [...state.tracks];
      newTracks.splice(trackToUpdate.playlistIndex, 1, trackToUpdate);
      return { ...state, tracks: newTracks };
    }
    case UPLOAD_ERROR:
      return { ...INITITAL_STATE, error: action.payload };
    case FULL_UPLOAD_COMPLETE:
      return { ...state, uploadComplete: true };
    case UPDATE_PLAYLIST_ORDER:
      return { ...state, tracks: action.payload, dragging: false };
    case STOP_UPDATING_PROGRESS:
      return { ...state, dragging: true };
    case START_UPDATING_PROGRESS:
      return { ...state, dragging: false };
    default:
      return state;
  }
};
