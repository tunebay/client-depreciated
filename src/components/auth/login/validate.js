const validate = (values) => {
  const errors = {};
  console.log(values);

  if (!values.emailOrUsername) {
    errors.emailOrUsername = 'Enter your email address or username';
  }

  return errors;
};

export default validate;
