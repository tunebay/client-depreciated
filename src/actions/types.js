// app actions (reserved for actions that can be called anywhere in app)

export const SHOW_ERROR_BANNER = 'SHOW_ERROR_BANNER';
export const CLOSE_BANNER = 'CLOSE_BANNER';

// auth acitons
export const AUTH_USER = 'AUTH_USER';
export const DEAUTH_USER = 'DEAUTH_USER';
export const AUTH_ERROR = 'AUTH_ERROR';
export const SIGNUP_ATTEMPT = 'SIGNUP_ATTEMPT';
export const USERNAME_CHECK = 'USERNAME_CHECK';
export const EMAIL_VALIDATING = 'EMAIL_VALIDATING';
export const USERNAME_VALIDATING = 'USERNAME_VALIDATING';
export const EMAIL_ERROR = 'EMAIL_ERROR';
export const USERNAME_ERROR = 'USERNAME_ERROR';
export const NEXT_SIGNUP_PAGE = 'NEXT_SIGNUP_PAGE';
export const SHOW_LOGIN_MODAL = 'SHOW_LOGIN_MODAL';
export const HIDE_LOGIN_MODAL = 'HIDE_LOGIN_MODAL';

// profile actions
export const MOUNT_USER = 'MOUNT_USER';
export const LOADING_USER = 'LOADING_USER';
export const UPDATE_SCROLL_POSITION = 'UPDATE_SCROLL_POSITION';
export const USER_DOESNT_EXIST = 'USER_DOESNT_EXIST';

// current user actions
export const SET_CURRENT_USER = 'SET_CURRENT_USER';

// hub/upload actions
export const ADD_TRACK = 'ADD_TRACK';
export const ADD_TRACK_LOCATION = 'ADD_TRACK_LOCATION';
export const UPDATE_TRACK_NAME = 'UPDATE_TRACK_NAME';
export const UPDATE_TRACK_PROGRESS = 'UPDATE_TRACK_PROGRESS';
export const UPDATE_PLAYLIST_POSITIONS = 'UPDATE_PLAYLIST_POSITIONS';
export const PLAYLIST_RELEASE_SUCCESS = 'PLAYLIST_RELEASE_SUCCESS';
export const UPDATE_PLAYLIST_LENGTH = 'UPDATE_PLAYLIST_LENGTH';
export const AUDIO_UPLOAD_ERROR = 'AUDIO_UPLOAD_ERROR';
export const AUDIO_UPLOAD_FINISHED = 'AUDIO_UPLOAD_FINISHED';
export const UPDATE_SINGLE_STATUS = 'UPDATE_SINGLE_STATUS';
export const UPDATE_TRACK_PRICE = 'UPDATE_TRACK_PRICE';

export const MULTI_UPLOAD_STARTED = 'MULTI_UPLOAD_STARTED';
export const SINGLE_UPLOAD_STARTED = 'SINGLE_UPLOAD_STARTED';
export const PLAYLIST_RELEASE_STARTED = 'PLAYLIST_RELEASE_STARTED';
export const SET_PAGE = 'SET_PAGE';
export const TERMINATE_PLAYLIST_UPLOAD = 'TERMINATE_PLAYLIST_UPLOAD';
export const SET_DEFAULT_VALUES = 'SET_DEFAULT_VALUES';
export const SET_PERMALINK = 'SET_PERMALINK';

export const ADD_ANOTHER_TRACK = 'ADD_ANOTHER_TRACK';
export const UPLOAD_ANOTHER_TRACK = 'UPLOAD_ANOTHER_TRACK';
export const ANOTHER_UPLOAD_FINISHED = 'ANOTHER_UPLOAD_FINISHED';
export const DELETE_TRACK = 'DELETE_TRACK';

export const SET_IMAGE = 'SET_IMAGE';
export const SET_SCALE = 'SET_SCALE';
export const SET_SCALED_IMAGE = 'SET_SCALED_IMAGE';
export const UPDATE_IMAGE_POSITION = 'UPDATE_IMAGE_POSITION';
export const ARTWORK_UPLOAD_STARTED = 'ARTWORK_UPLOAD_STARTED';
export const ARTWORK_UPLOAD_COMPLETE = 'ARTWORK_UPLOAD_COMPLETE';
export const ARTWORK_UPLOAD_ERROR = 'ARTWORK_UPLOAD_ERROR';

// player actions
export const ADD_TRACK_TO_PLAYER = 'ADD_TRACK_TO_PLAYER';
export const UPDATE_TRACK_MILLISECONDS = 'UPDATE_TRACK_MILLISECONDS';
export const UPDATE_TRACK_MILI_POSITION = 'UPDATE_TRACK_MILI_POSITION';
export const UPDATE_PLAY_STATUS = 'UPDATE_PLAY_STATUS';
