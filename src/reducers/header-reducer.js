import currentUserReducer from './current-user-reducer';
import SET_CURRENT_USER from '../actions/types';

const INITIAL_STATE = {
  visable: true,
  currentUser: {},
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        currentUser: currentUserReducer(action.payload, action),
      };
    default:
      return state;
  }
};
