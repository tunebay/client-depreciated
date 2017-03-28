import {
  ADD_TRACK_TO_PLAYER
} from '../../actions/types';

const INITIAL_STATE = {
  name: null,
  location: null,
  position: 300,
  duration: null,
  isPlaying: false,
  artist: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TRACK_TO_PLAYER:
      console.log('Playload', action.payload);
      return {
        ...state,
        name: action.payload.name,
        location: action.payload.location,
        duration: action.payload.duration,
        artist: action.payload.displayName,
        isPlaying: true
      };
    default:
      return state;
  }
};
