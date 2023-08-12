import axios from 'axios'

const BASE_URL = 'https://api.jokolodang.com/api/v1/';

export const defaultApi = axios.create({
  baseURL: BASE_URL,
  // withCredentials: true,
});

defaultApi.defaults.headers.common['Content-Type'] = 'application/json';