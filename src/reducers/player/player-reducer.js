import playerTrack from './player-track-reducer';
import playerPlaylist from './player-playlist-reducer';
import {
  ADD_TRACK_TO_PLAYER,
  UPDATE_TRACK_POSITION
} from '../../actions/types';

const PLAYING = 'PLAYING';
const PAUSED = 'PAUSED';

const INITIAL_STATE = {
  playlist: [],
  currentTrack: {},
  nextTrack: {},
  previousTrack: {},
  artist: '',
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
      console.log('TRACKS IN PLAYER', action.tracks);
      return {
        ...state,
        visable: true,
        currentTrack: playerTrack(action.payload, action),
        artist: action.payload.artist,
        playlist: playerPlaylist(action.tracks, action),
        playStatus: PLAYING,
        isPlaying: true
      };
    case UPDATE_TRACK_POSITION:
      return {
        ...state,
        currentTrack: playerTrack({
          ...state.currentTrack,
          position: action.payload
        }, action)
      };
    default:
      return state;
  }
};
