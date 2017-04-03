import axios from 'axios';
// import { SubmissionError } from 'redux-form';

const ROOT_URL = 'http://localhost:3000';

const uniqueEmailCheck = (values, dispatch) => {
  dispatch({ type: 'VALIDATING' });
  return axios.post(`${ROOT_URL}/signup/emailcheck`, { email: values.email })
    .then((res) => {
      dispatch({ type: 'FINISH_VALIDATING' });
      if (res.data.error) {
        return { email: 'Email already in use. Are you trying to log in?' };
      }
    })
    .catch((err) => {
      console.log('Error checking email is unique', err);
      dispatch({ type: 'FINISH_VALIDATING' });
    });
};

export default uniqueEmailCheck;
