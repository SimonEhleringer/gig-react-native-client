import axios from 'axios';

const authenticationApi = axios.create({
  baseURL: 'http://GiG.somee.com/api/v1',
});

export default authenticationApi;
