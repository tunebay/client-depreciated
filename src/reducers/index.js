import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './auth-reducer';
import profileReducer from './profile/profile-reducer';
import uploadedPlaylistReducer from './hub/uploaded-playlist-reducer';
// import uploadedArtworkReducer from './hub/uploaded-artwork-reducer'; old
import uploadedArtworkReducer from './artwork-reducer'; // new
// import audioUploadReducer from './hub/upload-reducer'; old
import audioUploadReducer from './upload-reducer'; // new
import currentUserReducer from './current-user-reducer';
import playerReducer from './player/player-reducer';

const rootReducer = combineReducers({
  form: formReducer,
  auth: authReducer,
  profile: profileReducer,
  uploadedPlaylist: uploadedPlaylistReducer,
  uploadedArtwork: uploadedArtworkReducer,
  currentUser: currentUserReducer,
  audioUpload: audioUploadReducer,
  player: playerReducer
});

export default rootReducer;
