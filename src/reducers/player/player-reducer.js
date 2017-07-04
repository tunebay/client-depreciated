import playerTrack from './player-track-reducer';
import playerPlaylist from './player-playlist-reducer';
import {
  ADD_TRACK_TO_PLAYER,
  UPDATE_TRACK_MILLISECONDS,
  UPDATE_TRACK_MILI_POSITION,
  UPDATE_PLAY_STATUS
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
  visable: false,
  duration: 0,
  progress: { playedSeconds: 0, played: 0 }
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
    case UPDATE_TRACK_MILLISECONDS:
      return {
        ...state,
        currentTrack: playerTrack({
          ...state.currentTrack,
          miliPosition: action.position,
          miliDuration: action.duration
        }, action)
      };
    case UPDATE_TRACK_MILI_POSITION:
      return {
        ...state,
        currentTrack: playerTrack({
          ...state.currentTrack,
          miliPosition: action.payload,
        }, action)
      };
    case UPDATE_PLAY_STATUS:
      return { ...state, playStatus: action.payload };
    case 'UPDATE_DURATION':
      return { ...state, duration: action.payload };
    case 'UPDATE_PROGRESS':
      return { ...state, progress: action.payload };
    case 'UPDATE_PLAYED_SECONDS':
      return { ...state, progress: { playedSeconds: action.payload } };
    default:
      return state;
  }
};
