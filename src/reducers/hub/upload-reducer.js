// import {
//   AUDIO_UPLOAD_ERROR,
//   AUDIO_UPLOAD_STARTED,
//   AUDIO_UPLOAD_FINISHED,
//   UPLOAD_ANOTHER_TRACK,
//   ANOTHER_UPLOAD_FINISHED,
//   UPDATE_TRACK_PROGRESS
// } from '../../actions/types';
//
// const INITIAL_STATE = {
//   error: '',
//   uploadStarted: false,
//   uploadInProgress: false,
//   uploadFinished: false
// };
//
// export default (state = INITIAL_STATE, action) => {
//   switch (action.type) {
//     case AUDIO_UPLOAD_ERROR:
//       return { ...state, error: action.payload };
//     case AUDIO_UPLOAD_STARTED:
//       return { ...state, uploadStarted: true, uploadInProgress: true };
//     case AUDIO_UPLOAD_FINISHED:
//       return { ...state, uploadFinished: true, uploadInProgress: false };
//     case UPLOAD_ANOTHER_TRACK:
//       return { ...state, uploadFinished: false, uploadInProgress: true };
//     case ANOTHER_UPLOAD_FINISHED:
//       return { ...state, uploadFinished: true, uploadInProgress: false };
//     case UPDATE_TRACK_PROGRESS:
//       return { ...state, uploadFinished: false, uploadInProgress: true };
//     default:
//       return state;
//   }
// };
