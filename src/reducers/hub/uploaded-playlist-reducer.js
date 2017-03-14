import { ADD_TRACK } from '../../actions/types';
import UploadedTrackReducer from './uploaded-track-reducer';

const INITIAL_STATE = [];

export default (state = INITIAL_STATE, action) => {
  console.log(action.type);
  switch (action.type) {
    case ADD_TRACK:
      return [...state, UploadedTrackReducer(null, action)];
    default:
      return state;
  }
};
