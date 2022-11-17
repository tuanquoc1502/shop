import axios from 'axios';
import { clearStorage, getToken } from './utils/auth';
import { baseUrl } from './utils/getbaseUrl';

const axiosConfig = axios.create();

axiosConfig.defaults.baseURL = baseUrl;

axiosConfig.interceptors.request.use(function (config) {
  const token = getToken();

  if (token) {
    const commonHeaders = { ...JSON.parse(token) };
    config.headers = commonHeaders;
  }
  return config;
});

axiosConfig.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const token = getToken();
    if (token && error.response.status === 401) {
      clearStorage();
      window.location.href = '/not_match';
      return;
    }
    if (
      token &&
      (error.response.status === 404 || error.response.status === 403)
    ) {
      window.location.href = '/not_match';
    }
    return Promise.reject(error);
  }
);

export default axiosConfig;
