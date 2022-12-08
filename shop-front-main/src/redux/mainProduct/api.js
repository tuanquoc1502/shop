import axiosConnect from '../../axiosConnect';

export const getMainProductApi = () => {
  return axiosConnect.get('/products');
};

export const postMainProductApi = (data) => {
  return axiosConnect.post('/products', data);
};
