import {
  ADD_TRACK_TO_PLAYER
} from '../../actions/types';

const INITIAL_STATE = {
  name: null,
  location: null,
  position: 300,
  duration: null,
  isPlaying: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TRACK_TO_PLAYER:
      return {
        ...state,
        name: action.payload.name,
        location: action.payload.location,
        duration: action.payload.duration,
        isPlaying: true
      };
    default:
      return state;
  }
};
