import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:8080/';

const getAdminBoard = () => axios.get(`${API_URL}admin`, { headers: authHeader() });
export default {
  getAdminBoard,
};
