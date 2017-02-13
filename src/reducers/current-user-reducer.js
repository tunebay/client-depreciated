import { SET_CURRENT_USER } from '../actions/types';

// const INITITAL_STATE = {
//   // displayName: null,
//   // email: null,
//   // username: null,
//   // id: null
// };

export default (state = null, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      console.log('action payload:', action.payload);
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
