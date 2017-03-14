import { ADD_TRACK } from '../types';

let playlistPosition = 0;

export const addTrack = (file) => {
  return (dispatch) => {
    const audio = document.createElement('AUDIO');
    audio.src = file.preview;
    audio.addEventListener('loadedmetadata', () => {
      const track = {
        name: file.name,
        playlistPosition: playlistPosition + 1,
        duration: Math.round(audio.duration),
        file
      };

      dispatch({ type: ADD_TRACK, payload: track });
    });
  };
};
