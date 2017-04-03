import axios from 'axios';
// import React from 'react';
// import { SubmissionError } from 'redux-form';
// import { withRouter } from 'react-router-dom';
// import { SET_CURRENT_USER, AUTH_USER } from '../../../actions/types';

const API_URL = 'http://localhost:3000';

const submit = ({ emailOrUsername, password }) => {
  return axios.post(`${API_URL}/login`, { emailOrUsername, password })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
      return { emailOrUsername: ' ', password: 'Incorrect log in details' };
    });
};


export default submit;
