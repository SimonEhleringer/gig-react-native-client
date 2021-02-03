import axios from 'axios';

const getSongBpmApi = axios.create({
  baseURL:
    'https://api.getsongbpm.com/search/?api_key=a802e5e5663656bbee374369b8d9bbb8&',
});

export default getSongBpmApi;
