const validate = (values) => {
  const errors = {};
  console.log(values.genres);
  if (!values.title) {
    errors.title = 'Your playlist must have a title';
  }
  if (!values.playlistType) {
    errors.playlistType = 'You must specify the playlist type';
  }
  if (!values.genres || values.genres <= 0) {
    errors.genres = 'You must select at least one genre';
  }
  if (!values.price) {
    errors.price = 'Enter a valid price';
  }
  if (values.price < 0) {
    errors.price = 'Mmmm... Is it even possible to sell something at a minus value? Inception.';
  }
  return errors;
};

export default validate;
