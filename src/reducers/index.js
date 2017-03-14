import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './auth-reducer';
import profileReducer from './profile-reducer';
import uploadedTrackReducer from './hub/uploaded-track-reducer';
import uploadedPlaylistReducer from './hub/uploaded-playlist-reducer';
import currentUserReducer from './current-user-reducer';

const rootReducer = combineReducers({
  form: formReducer,
  auth: authReducer,
  profile: profileReducer,
  uploadedTrack: uploadedTrackReducer,
  uploadedPlaylist: uploadedPlaylistReducer,
  currentUser: currentUserReducer
});

export default rootReducer;
