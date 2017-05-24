import axios from 'axios';
// import { SubmissionError } from 'redux-form';

const AUTH_PATH = 'http://localhost:3000/api/v1/auth';

const uniqueUsernameCheck = (values) => {
  return axios.post(`${AUTH_PATH}/usernamecheck`, { username: values.username })
    .then((res) => {
      console.log(res);
      if (res.data.message === 'Username is not available.') {
        return { username: 'That username is not available. Please choose another' };
      }
      if (res.data.message === 'Username is reserved.') {
        return { username: 'This username is reserved.' };
      }
    })
    .catch((err) => {
      console.log('Error checking email is unique', err);
    });
};

export default uniqueUsernameCheck;
