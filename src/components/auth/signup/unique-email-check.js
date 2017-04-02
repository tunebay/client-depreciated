import axios from 'axios';
// import { SubmissionError } from 'redux-form';

const ROOT_URL = 'http://localhost:3000';

const uniqueEmailCheck = (values) => {
  return axios.post(`${ROOT_URL}/signup/emailcheck`, { email: values.email })
    .then((res) => {
      if (res.data.error) {
        return { email: 'Email already in use. Are you trying to log in?' };
      }
    })
    .catch((err) => {
      console.log('Error checking email is unique', err);
    });
};

export default uniqueEmailCheck;
