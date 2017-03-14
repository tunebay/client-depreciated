export const updateTrackName = (input, trackId) => {
  console.log(input, trackId);
  return { type: 'UPDATE_TRACK_NAME', payload: input, trackId };
};
