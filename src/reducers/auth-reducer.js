import {
  AUTH_USER,
  DEAUTH_USER,
  AUTH_ERROR,
  SIGNUP_ATTEMPT
} from '../actions/types';

const INITITAL_STATE = {
  error: '',
  isAuthenticated: false,
  loading: false
};

export default (state = INITITAL_STATE, action) => {
  switch (action.type) {
    case AUTH_USER:
      return { ...INITITAL_STATE, isAuthenticated: true };
    case DEAUTH_USER:
      return { ...INITITAL_STATE, isAuthenticated: false };
    case AUTH_ERROR:
      return { ...INITITAL_STATE, error: action.payload, loading: true };
    case SIGNUP_ATTEMPT:
      return { ...INITITAL_STATE, loading: true };
    default:
      return state;
  }
};
