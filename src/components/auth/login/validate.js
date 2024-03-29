const validate = (values) => {
  const errors = {};

  if (!values.emailOrUsername) {
    errors.emailOrUsername = 'Enter your email address or username';
  }

  if (!values.password) {
    errors.password = 'Password is required';
  }

  return errors;
};

export default validate;
