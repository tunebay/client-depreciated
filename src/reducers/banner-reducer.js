import { SHOW_ERROR_BANNER, CLOSE_BANNER } from '../actions/types';

const INITIAL_STATE = {
  isVisable: false,
  message: null,
  type: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SHOW_ERROR_BANNER:
      return {
        ...state,
        isVisable: true,
        type: 'Error',
        message: action.payload,
      };
    case CLOSE_BANNER:
      return INITIAL_STATE;
    default:
      return state;
  }
};
