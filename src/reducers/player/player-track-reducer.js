import {
  ADD_TRACK_TO_PLAYER
} from '../../actions/types';

const INITIAL_STATE = {
  name: null,
  location: null,
  position: 0,
  duration: null,
  isPlaying: false,
  miliPosition: 300,
  miliDuration: 0,
  artist: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TRACK_TO_PLAYER:
      console.log('Playload', action.payload);
      return {
        ...state,
        name: action.payload.name,
        miliPosition: action.payload.miliPosition,
        miliDuration: action.payload.miliDuration,
        artist: action.payload.displayName,
        playlistType: action.payload.playlistType,
        isAsingle: action.payload.single,
        isPlaying: true
      };
    default:
      return state;
  }
};
