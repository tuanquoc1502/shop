import axios from 'axios';

const axiosConnect = axios.create();

axiosConnect.defaults.baseURL = process.env.REACT_APP_DOMAIN;

axiosConnect.interceptors.request.use(function (config) {
  return config;
});

axiosConnect.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosConnect;
