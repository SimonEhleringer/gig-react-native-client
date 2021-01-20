import { Client } from '../api.client.generated';
import axios from 'axios';

const apiClient = new Client('http://GiG.somee.com/api/v1', axios.create());

export default apiClient;
