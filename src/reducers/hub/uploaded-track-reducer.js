import {
  ADD_TRACK,
  UPDATE_TRACK_NAME,
  UPDATE_TRACK_PROGRESS,
  ADD_TRACK_LOCATION,
  UPDATE_SINGLE_STATUS,
  UPDATE_TRACK_PRICE,
  ADD_ANOTHER_TRACK,
  ADD_TRACK_ERROR
} from '../../actions/types';

export const INITIAL_STATE = {
  name: '',
  duration: null,
  trackId: null,
  size: null,
  location: '',
  file: null,
  filename: null,
  playlistPosition: null,
  single: false,
  price: null,
  fileType: null,
  hasError: false,
  tickAnimationPlayed: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TRACK:
      return {
        name: action.payload.name,
        filename: action.payload.file.name,
        trackId: action.payload.trackId,
        duration: action.payload.duration,
        file: action.payload.file,
        playlistPosition: action.payload.playlistPosition,
        single: false,
        price: parseFloat(0.00).toFixed(2),
        fileType: action.payload.fileType
      };
    case ADD_ANOTHER_TRACK:
      return {
        name: action.payload.name,
        filename: action.payload.file.name,
        trackId: action.payload.trackId,
        duration: action.payload.duration,
        file: action.payload.file,
        playlistPosition: action.payload.playlistPosition,
        single: false,
        price: parseFloat(0.00).toFixed(2),
        fileType: action.payload.fileType
      };
    case UPDATE_TRACK_NAME:
      if (state.trackId !== action.trackId) return state;
      return { ...state, name: action.payload };
    case UPDATE_TRACK_PROGRESS:
      if (state.trackId !== action.trackId) return state;
      return { ...state, progress: action.payload };
    case ADD_TRACK_LOCATION:
      if (state.trackId !== action.trackId) return state;
      return { ...state, location: action.payload, file: null };
    case ADD_TRACK_ERROR:
      if (state.trackId !== action.trackId) return state;
      return { ...state, hasError: true };
    case UPDATE_SINGLE_STATUS:
      if (state.trackId !== action.trackId) return state;
      return { ...state, single: action.payload };
    case UPDATE_TRACK_PRICE:
      if (state.trackId !== action.trackId) return state;
      return { ...state, price: action.payload };
    case 'TICK_ANIMATION_PLAYED':
      console.log('ANIMATION PLAYED');
      if (state.trackId !== action.trackId) return state;
      return { ...state, tickAnimationPlayed: true };
    default:
      return state;
  }
};
