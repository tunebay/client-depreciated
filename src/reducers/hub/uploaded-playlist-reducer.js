import {
  ADD_TRACK,
  UPDATE_TRACK_NAME,
  UPDATE_PLAYLIST_POSITIONS,
  UPDATE_TRACK_PROGRESS,
  ADD_TRACK_LOCATION,
  UPDATE_SINGLE_STATUS,
  UPDATE_TRACK_PRICE
} from '../../actions/types';
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
    case UPDATE_TRACK_PRICE:
      return state.map(track =>
        UploadedTrackReducer(track, action)
      );
    case UPDATE_TRACK_PROGRESS:
      return state.map(track =>
        UploadedTrackReducer(track, action)
      );
    case UPDATE_SINGLE_STATUS:
      return state.map(track =>
        UploadedTrackReducer(track, action)
      );
    case ADD_TRACK_LOCATION:
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
