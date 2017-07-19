import playerPlaylist from './player-playlist.reducer';
import {
  ADD_PLAYLIST_TO_PLAYER,
  UPDATE_PLAY_STATUS
} from '../../actions/types';

const PLAYING = 'PLAYING';
const PAUSED = 'PAUSED';

const INITIAL_STATE = {
  playlist: [],
  playStatus: PAUSED,
  hasNext: false,
  volume: 0.8,
  isMuted: false,
  visable: false,
  duration: 0,
  progress: { playedSeconds: 0, played: 0 }
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_PLAY_STATUS:
      return { ...state, playStatus: action.payload };
    case 'UPDATE_DURATION':
      return { ...state, duration: action.payload };
    case 'UPDATE_PROGRESS':
      return { ...state, progress: action.payload };
    case 'UPDATE_PLAYED_SECONDS':
      return { ...state, progress: { playedSeconds: action.payload } };
    case 'UPDATE_VOLUME':
      return { ...state, volume: action.payload };
    case ADD_PLAYLIST_TO_PLAYER:
      return {
        ...state,
        playlist: playerPlaylist(null, action),
        visable: true,
        playStatus: PLAYING
      };
    default:
      return state;
  }
};
