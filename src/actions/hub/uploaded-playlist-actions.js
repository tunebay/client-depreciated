import { arrayMove } from 'react-sortable-hoc';
import { ADD_TRACK, UPDATE_PLAYLIST_POSITIONS } from '../types';

let playlistPosition = 0;
let trackId = 0;

export const addTrack = (file) => {
  return (dispatch) => {
    const audio = document.createElement('AUDIO');
    audio.src = file.preview;
    audio.addEventListener('loadedmetadata', () => {
      const track = {
        name: file.name,
        playlistPosition: playlistPosition += 1,
        trackId: trackId += 1,
        duration: Math.round(audio.duration),
        file
      };

      dispatch({ type: ADD_TRACK, payload: track });
    });
  };
};

export const updateTrackPosition = (playlist, oldIndex, newIndex) => {
  const newOrderPlaylist = arrayMove(playlist, oldIndex, newIndex);
  return { type: UPDATE_PLAYLIST_POSITIONS, payload: newOrderPlaylist };
};
