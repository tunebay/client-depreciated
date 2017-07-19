// import ADD_PLAYLIST_TO_PLAYER from '../../actions/types';
// // import playerTrack from './player-track.reducer';
//
// const INITIAL_STATE = {
//   currentTrack: {},
//   nextTrack: null,
//   previousTrack: null,
//   tracks: []
// };
//
// export default (state = INITIAL_STATE, action) => {
//   switch (action.type) {
//     case ADD_PLAYLIST_TO_PLAYER:
//       // const tracks = action.payload.tracks;
//       return {
//         ...state,
//         tracks:
//         currentTrack: playerTrack(action.payload.tracks.filter(track => track.position === 1)),
//         nextTrack: playerTrack(action.payload.tracks.filter(track => track.position === 2)),
//         previousTrack: null
//       };
//     default:
//       return state;
//   }
// };
