import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5050/api/',
  timeout: 600
});

instance.interceptors.response.use(
  (response) => {
    return response.data
  },

  (error) => {
    console.error();
  }
);

export default instance;