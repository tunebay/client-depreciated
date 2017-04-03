import axios from 'axios';
import { SubmissionError } from 'redux-form';

const API_URL = 'http://localhost:3000';

const submit = ({ emailOrUsername, password }) => {
  axios.post(`${API_URL}/login`, { emailOrUsername, password })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
      throw new SubmissionError({ emailOrUsername: '', password: 'Incorrect log in details' });
    });
};


export default submit;
