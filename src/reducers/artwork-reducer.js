const INITIAL_STATE = {
  artworkModalVisable: false,
  preview: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SHOW_ARTWORK_MODAL':
      return { ...state, artworkModalVisable: true, preview: action.payload };
    case 'HIDE_ARTWORK_MODAL':
      return { ...state, artworkModalVisable: false };
    default:
      return state;
  }
};
