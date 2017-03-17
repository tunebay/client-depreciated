import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './auth-reducer';
import profileReducer from './profile-reducer';
import uploadedPlaylistReducer from './hub/uploaded-playlist-reducer';
import uploadedArtworkReducer from './hub/uploaded-artwork-reducer';
import currentUserReducer from './current-user-reducer';

const rootReducer = combineReducers({
  form: formReducer,
  auth: authReducer,
  profile: profileReducer,
  uploadedPlaylist: uploadedPlaylistReducer,
  uploadedArtwork: uploadedArtworkReducer,
  currentUser: currentUserReducer
});

export default rootReducer;
