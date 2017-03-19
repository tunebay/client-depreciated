import {
  ADD_TRACK,
  UPDATE_TRACK_NAME,
  UPDATE_TRACK_PROGRESS,
  ADD_TRACK_LOCATION
} from '../../actions/types';

export const INITIAL_STATE = {
  name: '',
  duration: null,
  trackId: null,
  size: null,
  location: '',
  file: null,
  playlistPosition: null,
  isASingle: false,
  price: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TRACK:
      return {
        name: action.payload.name,
        trackId: action.payload.trackId,
        duration: action.payload.duration,
        file: action.payload.file,
        playlistPosition: action.payload.playlistPosition
      };
    case UPDATE_TRACK_NAME:
      if (state.trackId !== action.trackId) return state;
      return { ...state, name: action.payload };
    case UPDATE_TRACK_PROGRESS:
      if (state.trackId !== action.trackId) return state;
      return { ...state, progress: action.payload };
    case ADD_TRACK_LOCATION:
      if (state.trackId !== action.trackId) return state;
      return { ...state, location: action.payload };
    default:
      return state;
  }
};
