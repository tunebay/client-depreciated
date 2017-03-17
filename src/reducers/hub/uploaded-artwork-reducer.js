import { SET_IMAGE, SET_SCALE, SET_SCALED_IMAGE } from '../../actions/types';

const INITIAL_STATE = {
  image: null,
  disableClick: false,
  scale: 1.0,
  scaledImage: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_IMAGE:
      return { ...state, image: action.payload, disableClick: true };
    case SET_SCALE:
      return { ...state, scale: action.payload };
    case SET_SCALED_IMAGE:
      return { ...state, scaledImage: action.payload };
    default:
      return state;
  }
};
