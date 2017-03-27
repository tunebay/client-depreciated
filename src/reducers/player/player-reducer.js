import playerTrack from './player-track-reducer';

const INITIAL_STATE = {
  playlist: [],
  currentTrack: {},
  nextTrack: {},
  previousTrack: {},
  playStatus: 'PAUSED',
  isPlaying: false,
  hasNext: false,
  volume: 80,
  isMuted: false,
  visable: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
