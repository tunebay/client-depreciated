import profileUserReducer from './profile-user-reducer';
import profilePlaylistsReducer from './profile-playlists-reducer';
import {
  MOUNT_USER,
  LOADING_USER
} from '../../actions/types';

const INITITAL_STATE = {
  user: null,
  playlists: null,
  loading: true
};

export default (state = INITITAL_STATE, action) => {
  switch (action.type) {
    case LOADING_USER:
      return { ...INITITAL_STATE, loading: true };
    case MOUNT_USER:
      return {
        ...INITITAL_STATE,
        user: profileUserReducer(action.user, action.type),
        playlists: profilePlaylistsReducer(action.playlists, action.type),
        loading: false
      };
    default:
      return state;
  }
};
