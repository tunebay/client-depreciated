import {
  AUTH_USER,
  DEAUTH_USER,
  AUTH_ERROR
} from '../actions/types';

const INITITAL_STATE = {
  error: '',
  isAuthenticated: false
};

export default (state = INITITAL_STATE, action) => {
  switch (action.type) {
    case AUTH_USER:
      return { ...INITITAL_STATE, isAuthenticated: true };
    case DEAUTH_USER:
      return { ...state, isAuthenticated: false };
    case AUTH_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
