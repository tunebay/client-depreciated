const INITIAL_STATE = {
  playlist: [],
  currentTrack: {},
  nextTrack: {},
  previousTrack: {},
  isPlaying: false,
  hasNext: false,
  volume: 0.8,
  isMuted: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
