import {
  PLAYLIST_RELEASE_SUCESS,
  PLAYLIST_RELEASE_STARTED,
  SET_PAGE,
  MULTI_UPLOAD_STARTED,
  SINGLE_UPLOAD_STARTED
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
  error: ''
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
    case PLAYLIST_RELEASE_SUCESS:
      return INITIAL_STATE;
    default:
      return state;
  }
};
