export const INITIAL_STATE = {
  name: '',
  duration: null,
  size: null,
  location: '',
  file: null,
  playlistPosition: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_TRACK':
      console.log('Track reducer', action.payload);
      return {
        name: action.payload.name,
        duration: action.payload.duration,
        file: action.payload.file,
        playlistPosition: action.payload.playlistPosition
      };
    default:
      return state;
  }
};
