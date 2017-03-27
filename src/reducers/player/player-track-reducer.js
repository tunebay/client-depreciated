const INITIAL_STATE = {
  name: null,
  location: null,
  position: 300,
  duration: null,
  isPlaying: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
