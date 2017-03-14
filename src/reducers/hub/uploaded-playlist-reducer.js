import { ADD_TRACK } from '../../actions/types';
import UploadedTrackReducer from './uploaded-track-reducer';

const INITIAL_STATE = [];

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TRACK:
      console.log('Playlist reducer', action);
      return [...state, UploadedTrackReducer(action.payload, action)];
    default:
      return state;
  }
};
