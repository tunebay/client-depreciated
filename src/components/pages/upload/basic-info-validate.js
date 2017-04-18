const basicInfoValidate = ({ title, playlistType, genres }) => {
  const errors = {};
  if (!title) {
    errors.title = 'Enter a title for your playlist';
  }
  if (!playlistType) {
    errors.playlistType = 'Choose the type of playlist';
  }
  if (!genres || genres.length <= 0) {
    errors.genres = 'Select atleast one genre';
  }
  console.log('IN VALIDATE', genres);
  return errors;
};

export default basicInfoValidate;
