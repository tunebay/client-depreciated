import { MOUNT_USER, USER_DOESNT_EXIST, FINDING_USER } from '../actions/types';

const INITIAL_STATE = {
  user: null,
  findingUser: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MOUNT_USER:
      return { user: action.payload, findingUser: false };
    case FINDING_USER:
      return { ...state, findingUser: true };
    case USER_DOESNT_EXIST:
      return INITIAL_STATE;
    default:
      return state;
  }
};
