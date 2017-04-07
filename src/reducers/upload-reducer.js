const INITIAL_STATE = {
  uploadZoneVisable: true
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SINGLE_UPLOAD_STARTED':
      return { ...state, uploadZoneVisable: false };
    case 'MULTI_UPLOAD_STARTED':
      return { ...state, uploadZoneVisable: false };
    default:
      return state;
  }
};
