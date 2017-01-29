import axios from 'axios';

const API_URL = 'http://localhost:3000';

export const loadUser = (username) => {
  console.log('username:', username);
  return (dispatch) => {
    axios.get(`${API_URL}/user/${username}`)
    .then((res) => {
      console.log(res.data.user);
    })
    .catch((err) => {
      console.log(err.response.data.error);
    });
  };
};
