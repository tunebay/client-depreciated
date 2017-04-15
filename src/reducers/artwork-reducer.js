const INITIAL_STATE = {
  artworkModalVisable: false,
  preview: '',
  dataURL: null,
  image: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SHOW_ARTWORK_MODAL':
      return { ...state, artworkModalVisable: true, preview: action.payload };
    case 'HIDE_ARTWORK_MODAL':
      return { ...state, artworkModalVisable: false };
    case 'SAVE_ARTWORK':
      return {
        ...state,
        artworkModalVisable: false,
        dataURL: action.dataURL,
        image: action.image
      };
    default:
      return state;
  }
};
