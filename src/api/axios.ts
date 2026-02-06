import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000/api/';

axios.interceptors.request.use(config => {
  config.headers.Authorization = `Bearer ${localStorage.getItem('authToken')}`;

  return config;
});

export default axios;
