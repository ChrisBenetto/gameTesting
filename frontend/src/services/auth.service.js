import axios from 'axios';

const API_URL = 'http://localhost:8080/';

const register = (username, email, password) => axios.post(`${API_URL}signup`, {
  username,
  email,
  password,
});

const login = (email, password) => axios
  .post(`${API_URL}login`, {
    email,
    password,
  })
  .then((response) => {
    if (response.data.accessToken) {
      localStorage.setItem('user', JSON.stringify(response.data));
    }

    return response.data;
  });

const logout = () => {
  localStorage.removeItem('user');
};

export default {
  register,
  login,
  logout,
};
