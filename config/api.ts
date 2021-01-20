import axios from 'axios';

const api = axios.create({
  baseURL: 'http://GiG.somee.com/api/v1',
});

export default api;
