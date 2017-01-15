import axios from 'axios';

const ROOT_URL = 'http://localhost:3000';

export const loginUser = ({ emailOrUsername, password }) => {
  return (dispatch) => {
    axios.post(`${ROOT_URL}/login`, { emailOrUsername, password });
  };
};

export const signupUser = () => {
  console.log('Signing up');
};
