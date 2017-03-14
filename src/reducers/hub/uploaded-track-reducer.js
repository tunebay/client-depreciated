import { ADD_TRACK, UPDATE_TRACK_NAME } from '../../actions/types';

export const INITIAL_STATE = {
  name: '',
  duration: null,
  trackId: null,
  size: null,
  location: '',
  file: null,
  playlistPosition: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TRACK:
      console.log('Track reducer', action.payload);
      return {
        name: action.payload.name,
        trackId: action.payload.trackId,
        duration: action.payload.duration,
        file: action.payload.file,
        playlistPosition: action.payload.playlistPosition
      };
    case UPDATE_TRACK_NAME:
      if (state.trackId !== action.trackId) {
        console.log('Dont update name');
        return state;
      }
      console.log('UPDATE NAME');
      return { ...state, name: action.payload };
    default:
      return state;
  }
};
