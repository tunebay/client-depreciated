import {
  UPDATE_PLAYLIST_LENGTH
} from '../../actions/types';

const INITIAL_STATE = {
  // uplaod form entries
  title: '',
  playlistType: '',
  description: null,
  price: null,
  canPayMore: null,
  releaseDate: null,
  // programtic entries
  numberOfTracks: null,
  duration: null,
  artworkLocation: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_PLAYLIST_LENGTH:
      return { ...state, numberOfTracks: action.payload };
    default:
      return state;
  }
};
