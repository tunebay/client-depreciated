import {
  LOAD_USER
} from '../actions/types';

const INITITAL_STATE = {};

export default (state = INITITAL_STATE, action) => {
  switch (action.type) {
    case LOAD_USER:
      return { ...INITITAL_STATE, user: action.payload };
    default:
      return state;
  }
};
