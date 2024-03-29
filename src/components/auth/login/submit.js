import axios from 'axios';
// import React from 'react';
import { SubmissionError } from 'redux-form';
// import { withRouter, Redirect } from 'react-router-dom';
// import { SET_CURRENT_USER, AUTH_USER } from '../../../actions/types';

const AUTH_PATH = 'http://localhost:3000/api/v1/auth';

const submit = ({ emailOrUsername, password }, dispatch) => {
  dispatch({ type: 'VALIDATING' });
  return axios
    .post(`${AUTH_PATH}/login`, { emailOrUsername, password })
    .then((res) => {
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('user', JSON.stringify(res.data.user));
      dispatch({ type: 'SET_CURRENT_USER', payload: res.data.user });
      dispatch({ type: 'FINISH_VALIDATING' });
      dispatch({ type: 'HIDE_LOGIN_MODAL' });
      dispatch({ type: 'AUTH_USER' });
    })
    .catch((err) => {
      console.log('SUBMIT ERR,', err);
      dispatch({ type: 'FINISH_VALIDATING' });
      throw new SubmissionError({
        emailOrUsername: ' ',
        password: 'Incorrect log in details',
      });
    });
};

export default submit;
