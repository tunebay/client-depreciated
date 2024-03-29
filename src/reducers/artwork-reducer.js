const INITIAL_STATE = {
  artworkModalVisable: false,
  dataURL: null,
  image: null,
  scale: 1,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SHOW_ARTWORK_MODAL':
      return { ...state, artworkModalVisable: true, preview: action.payload };
    case 'HIDE_ARTWORK_MODAL':
      return { ...state, artworkModalVisable: false };
    case 'SET_SCALE':
      return { ...state, scale: action.payload };
    case 'SAVE_ARTWORK':
      return {
        ...INITIAL_STATE,
        artworkModalVisable: false,
        dataURL: action.dataURL,
        image: action.image,
      };
    case 'TERMINATE_PLAYLIST_UPLOAD':
      return INITIAL_STATE;
    default:
      return state;
  }
};
