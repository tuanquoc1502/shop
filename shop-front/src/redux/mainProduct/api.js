import axiosConnect from '../../axiosConnect';

export const getMainProductApi = () => {
  return axiosConnect.get('/products');
};

export const postMainProductApi = (data) => {
  return axiosConnect.post('/products', data);
};

export const deleteMainProductApi = (data) => {
  return axiosConnect.delete(`/products/${data}`);
};

export const editMainProductApi = (data) => {
  return axiosConnect.patch(`/products/${data.id}`, data);
};
