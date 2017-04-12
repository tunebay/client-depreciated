import axios from 'axios';
// import { SubmissionError } from 'redux-form';

const ROOT_URL = 'http://localhost:3000';

const uniqueUsernameCheck = (values) => {
  return axios.post(`${ROOT_URL}/signup/usernamecheck`, { username: values.username })
    .then((res) => {
      if (res.data.error) {
        return { username: 'That username is not available. Please choose another' };
      }
    })
    .catch((err) => {
      console.log('Error checking email is unique', err);
    });
};

export default uniqueUsernameCheck;
