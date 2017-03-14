import { ADD_TRACK, UPDATE_TRACK_NAME, UPDATE_PLAYLIST_POSITIONS } from '../../actions/types';
import UploadedTrackReducer from './uploaded-track-reducer';

const INITIAL_STATE = [];

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TRACK:
      return [...state, UploadedTrackReducer(null, action)];
    case UPDATE_TRACK_NAME:
      return state.map(track =>
        UploadedTrackReducer(track, action)
      );
    case UPDATE_PLAYLIST_POSITIONS:
      return action.payload.map((track, index) =>
        UploadedTrackReducer({ ...track, playlistPosition: index + 1 }, action)
      );
    default:
      return state;
  }
};
