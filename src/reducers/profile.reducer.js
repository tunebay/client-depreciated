import { MOUNT_USER, USER_DOESNT_EXIST, FINDING_USER,
UPDATE_COVER_BOTTOM } from '../actions/types';

const INITIAL_STATE = {
  user: null,
  findingUser: true,
  currentPlaylist: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MOUNT_USER:
      return { user: action.payload, findingUser: false };
    case FINDING_USER:
      return { ...state, findingUser: true };
    case UPDATE_COVER_BOTTOM:
      return { ...state, coverBottom: action.payload };
    case USER_DOESNT_EXIST:
      return INITIAL_STATE;
    case 'SET_PLAYLIST_PAGE_PLAYLIST':
      return { ...state, currentPlaylist: action.payload };
    case 'PLAYLIST_DOESNT_EXIST': {
      return { ...state, currentPlaylist: null };
    }
    default:
      return state;
  }
};
