import {
  ADD_TRACK_TO_PLAYER
} from '../../actions/types';

const PLAYING = 'PLAYING';
const PAUSED = 'PAUSED';

import playerTrack from './player-track-reducer';

const INITIAL_STATE = {
  playlist: [],
  currentTrack: {},
  nextTrack: {},
  previousTrack: {},
  playStatus: PAUSED,
  isPlaying: false,
  hasNext: false,
  volume: 80,
  isMuted: false,
  visable: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TRACK_TO_PLAYER:
      return {
        ...state,
        visable: true,
        currentTrack: playerTrack(action.payload, action),
        playStatus: PLAYING,
        isPlaying: true
      };
    default:
      return state;
  }
};
