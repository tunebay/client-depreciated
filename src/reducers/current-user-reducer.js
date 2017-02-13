import { SET_CURRENT_USER } from '../actions/types';

export default (state = null, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        id: action.payload.id,
        username: action.payload.username,
        email: action.payload.email,
        displayName: action.payload.displayName
      };
    default:
      return state;
  }
};
