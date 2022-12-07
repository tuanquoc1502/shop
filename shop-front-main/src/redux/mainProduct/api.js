import axiosConnect from '../../axiosConnect';

export const login = (data) => {
  return axiosConnect.post('/api/v1/customer/sign_in', data);
};
