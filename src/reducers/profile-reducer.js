import {
  MOUNT_USER,
  LOADING_USER
} from '../actions/types';

const INITITAL_STATE = {
  user: null,
  loading: true
};

export default (state = INITITAL_STATE, action) => {
  switch (action.type) {
    case LOADING_USER:
      return { ...INITITAL_STATE, loading: true };
    case MOUNT_USER:
      console.log('PAYLOAD:', action.payload);
      return { ...INITITAL_STATE, user: action.payload, loading: false };
    default:
      return state;
  }
};
