import ADD_PLAYLIST_TO_PLAYER from '../../actions/types';
import playerTrack from './player-track.reducer';

const INITIAL_STATE = {
  currentTrack: {},
  nextTrack: null,
  previousTrack: null,
  tracks: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_PLAYLIST_TO_PLAYER:
      return {
        ...state,
        currentTrack: playerTrack(action.payload.tracks)
      };
    default:
      return state;
  }
};
