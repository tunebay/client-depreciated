const priceValidate = ({ price, playlistType }) => {
  const errors = {};
  if (!price) {
    errors.price = `Price can not be left blank. Enter £0.00 if you intend for your ${playlistType.label} to be free.`;
  }
  if ((parseFloat(price) < 0.25) && (parseFloat(price) !== 0)) {
    errors.price = 'This price is too small to process. Please enter either zero, or £0.25 or more.';
  }
  if (!(/^\d+(\.\d{2})?$/).test(price)) {
    errors.price = 'Invalid price';
  }
  if (parseFloat(price) >= 1000) {
    errors.price = 'This price is too large to process.';
  }
  return errors;
};

export default priceValidate;
