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
  SHOW_LOGIN_MODAL,
  HIDE_LOGIN_MODAL
} from '../actions/types';

const INITITAL_STATE = {
  isAuthenticated: false,
  loading: false,
  isValidating: false,
  usernameValidating: false,
  emailValidating: false,
  signupPage: 1,
  loginModalVisable: false
};

export default (state = INITITAL_STATE, action) => {
  switch (action.type) {
    case AUTH_USER:
      return { ...state, isAuthenticated: true };
    case DEAUTH_USER:
      return INITITAL_STATE;
    case AUTH_ERROR:
      return { ...state, error: action.payload };
    case SIGNUP_ATTEMPT:
      return { ...state, loading: true };
    case USERNAME_VALIDATING:
      return { ...state, usernameValidating: true, loading: true };
    case EMAIL_VALIDATING:
      return { ...state, usernameValidating: true, loading: true };
    case USERNAME_ERROR:
      return { ...state, usernameError: action.payload };
    case EMAIL_ERROR:
      return { ...state, emailError: action.payload };
    case NEXT_SIGNUP_PAGE:
      return { ...state, signupPage: action.payload };
    case SHOW_LOGIN_MODAL:
      return { ...state, loginModalVisable: true };
    case HIDE_LOGIN_MODAL:
      return { ...state, loginModalVisable: false };
    case 'VALIDATING':
      return { ...state, isValidating: true };
    case 'FINISH_VALIDATING':
      return { ...state, isValidating: false };
    default:
      return state;
  }
};
