import axios from 'axios';
// import { SubmissionError } from 'redux-form';

const AUTH_PATH = 'http://localhost:3000/api/v1/auth';

const uniqueEmailCheck = (values, dispatch) => {
  dispatch({ type: 'VALIDATING' });
  return axios
    .post(`${AUTH_PATH}/emailcheck`, { email: values.email })
    .then((res) => {
      dispatch({ type: 'FINISH_VALIDATING' });
      if (res.data.message === 'Email already in use.') {
        return { email: 'Email already in use. Are you trying to log in?' };
      }
    })
    .catch((err) => {
      console.log('Error checking email is unique', err);
      dispatch({ type: 'FINISH_VALIDATING' });
    });
};

export default uniqueEmailCheck;
