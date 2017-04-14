export const showArtworkModal = (image) => {
  return { type: 'SHOW_ARTWORK_MODAL', payload: image.preview };
};

export const hideArtworkModal = () => {
  return { type: 'HIDE_ARTWORK_MODAL' };
};
