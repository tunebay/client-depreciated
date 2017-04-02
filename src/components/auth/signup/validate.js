const validate = (values) => {
  const errors = {};

  if (!values.displayName) {
    errors.displayName = 'What\'s your name?';
  } else if (values.displayName.length > 24) {
    errors.displayName = 'Display names can be a maximum of 20 characters';
  }
  if (!values.email) {
    errors.email = 'Enter your email address';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  if (!values.username) {
    errors.username = 'Choose a username';
  } else if (!/^[a-z][a-z0-9_]{0,24}$/i.test(values.username)) {
    errors.username = 'Your username can only contain letters, numbers and \'_\'';
  }
  if (!values.password || (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(values.password))) {
    errors.password = 'Password must be a minimum of 8 characters and contain at least one letter and number';
  }
  return errors;
};

export default validate;
