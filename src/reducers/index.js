import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './auth-reducer';
import profileReducer from './profile/profile-reducer';
import uploadedPlaylistReducer from './hub/uploaded-playlist-reducer';
import uploadedArtworkReducer from './artwork-reducer'; // new
import audioUploadReducer from './upload-reducer'; // new
import currentUserReducer from './current-user-reducer';
import playerReducer from './player/player-reducer';

import { PLAYLIST_RELEASE_SUCCESS, SET_DEFAULT_VALUES } from '../actions/types';

const rootReducer = combineReducers({
  form: formReducer.plugin({
    audioUploadForm: (state, action) => {
      console.log('FORM STATE', state);
      switch (action.type) {
        case PLAYLIST_RELEASE_SUCCESS:
          return undefined;
        case SET_DEFAULT_VALUES:
          return { ...state,
            values: {
              title: action.title,
              canPayMore: true,
              price: parseFloat(0.00).toFixed(2),
              playlistType: action.playlistType
            }
          };
        default:
          return state;
      }
    }
  }),
  auth: authReducer,
  profile: profileReducer,
  uploadedPlaylist: uploadedPlaylistReducer,
  uploadedArtwork: uploadedArtworkReducer,
  currentUser: currentUserReducer,
  audioUpload: audioUploadReducer,
  player: playerReducer
});

export default rootReducer;
