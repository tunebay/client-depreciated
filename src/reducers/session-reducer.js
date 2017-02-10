import { AUTH_USER } from '../actions/types';

const INITITAL_STATE = {
  user: null
};

export default (state = INITITAL_STATE, action) => {
  switch (action.type) {
    case AUTH_USER:
      return { ...INITITAL_STATE, user: action.payload };
    default:
      return state;
  }
};
