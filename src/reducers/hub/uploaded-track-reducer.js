export const INITIAL_STATE = {
  name: '',
  duration: null,
  size: null,
  location: '',
  playlistIndex: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
