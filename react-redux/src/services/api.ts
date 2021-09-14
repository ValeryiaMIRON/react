import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://newsapi.org/',
  timeout: 3000,
});

export default axiosInstance;
