import axios from 'axios';

const getSongBpmApi = axios.create({
  baseURL: 'https://api.getsongbpm.com',
});

export default getSongBpmApi;

export const API_KEY = 'a802e5e5663656bbee374369b8d9bbb8';
