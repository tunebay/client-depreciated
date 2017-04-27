import {
  PLAYLIST_RELEASE_SUCCESS,
  PLAYLIST_RELEASE_STARTED,
  SET_PAGE,
  MULTI_UPLOAD_STARTED,
  SINGLE_UPLOAD_STARTED,
  TERMINATE_PLAYLIST_UPLOAD
} from '../actions/types';

const MULTI = 'MULTI';
const SINGLE = 'SINGLE';

const UPLOAD_PAGE = 'UPLOAD_PAGE';
const BASIC_INFO_PAGE = 'BASIC_INFO_PAGE';

const INITIAL_STATE = {
  uploadZoneVisable: true,
  formType: '',
  formPage: UPLOAD_PAGE,
  isReleasing: false,
  isUploading: false,
  error: '',
  relasedModalVisable: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SINGLE_UPLOAD_STARTED:
      return {
        ...state,
        uploadZoneVisable: false,
        formType: SINGLE,
        formPage: BASIC_INFO_PAGE,
        isUploading: true
      };
    case MULTI_UPLOAD_STARTED:
      return {
        ...state,
        uploadZoneVisable: false,
        formType: MULTI,
        formPage: BASIC_INFO_PAGE,
        isUploading: true
      };
    case SET_PAGE:
      return { ...state, formPage: action.payload };
    case PLAYLIST_RELEASE_STARTED:
      return { ...state, isReleasing: true };
    case 'HIDE_RELEASED_MODAL':
      return INITIAL_STATE;
    case PLAYLIST_RELEASE_SUCCESS:
      return {
        ...state,
        releasedModalVisable: true,
        isReleasing: false,
        formPage: UPLOAD_PAGE
      };
    case TERMINATE_PLAYLIST_UPLOAD:
      return INITIAL_STATE;
    default:
      return state;
  }
};
