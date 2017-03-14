import { ADD_TRACK } from '../../actions/types';
import { INITIAL_STATE as TRACK_INITIAL_STATE } from './uploaded-track-reducer';

const INITIAL_STATE = [];

export default (state = INITIAL_STATE, action) => {
  console.log(action.type);
  switch (action.type) {
    case ADD_TRACK:
      console.log('IN REDUCER', [...state, TRACK_INITIAL_STATE]);
      return [...state, TRACK_INITIAL_STATE];
    default:
      return state;
  }
};
