import axios from 'axios';
import { SubmissionError } from 'redux-form';

const ROOT_URL = 'http://localhost:3000';

const uniqueEmailCheck = (values, dispatch) => {
  console.log('ASsssYNC', values.email);
  return axios.post(`${ROOT_URL}/signup/emailcheck`, { email: values.email })
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      throw new SubmissionError({ email: 'Email already in use. Are you trying to log in?' });
    });
};

export default uniqueEmailCheck;
