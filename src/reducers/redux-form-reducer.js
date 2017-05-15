import { reducer } from 'redux-form';

import {
  SET_PERMALINK,
  SET_DEFAULT_VALUES,
  TERMINATE_PLAYLIST_UPLOAD
} from '../actions/types';

const formReducer = reducer.plugin({
  audioUploadForm: (state, action) => {
    switch (action.type) {
      case TERMINATE_PLAYLIST_UPLOAD:
        return undefined;
      case SET_DEFAULT_VALUES:
        return { ...state,
          values: {
            title: action.title,
            canPayMore: true,
            price: parseFloat(0.00).toFixed(2),
            playlistType: action.playlistType,
            permalink: action.permalink
          }
        };
      case SET_PERMALINK:
        return { ...state, values: { ...state.values, permalink: action.payload } };
      default:
        return state;
    }
  }
});

export default formReducer;
