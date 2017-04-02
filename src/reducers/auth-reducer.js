import {
  AUTH_USER,
  DEAUTH_USER,
  AUTH_ERROR,
  SIGNUP_ATTEMPT,
  USERNAME_VALIDATING,
  EMAIL_VALIDATING,
  EMAIL_ERROR,
  USERNAME_ERROR,
  NEXT_SIGNUP_PAGE,
} from '../actions/types';

const INITITAL_STATE = {
  error: '',
  isAuthenticated: false,
  loading: false,
  usernameError: '',
  emailError: '',
  usernameValidating: false,
  emailValidating: false,
  signupPage: 1
};

export default (state = INITITAL_STATE, action) => {
  switch (action.type) {
    case AUTH_USER:
      return { ...INITITAL_STATE, isAuthenticated: true };
    case DEAUTH_USER:
      return { ...INITITAL_STATE };
    case AUTH_ERROR:
      return { ...INITITAL_STATE, error: action.payload };
    case SIGNUP_ATTEMPT:
      return { ...INITITAL_STATE, loading: true };
    case USERNAME_VALIDATING:
      return { ...INITITAL_STATE, usernameValidating: true };
    case USERNAME_ERROR:
      return { ...INITITAL_STATE, usernameError: action.payload };
    case EMAIL_ERROR:
      return { ...INITITAL_STATE, emailError: action.payload };
    case NEXT_SIGNUP_PAGE:
      return { ...state, signupPage: action.payload };
    default:
      return state;
  }
};
