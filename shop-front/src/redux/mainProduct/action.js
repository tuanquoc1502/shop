import * as TYPES from './constants';

export const getMainProduct = () => ({
  type: TYPES.GET_MAIN_PRODUCT,
});

export const getMainProductSuccess = (data) => ({
  type: TYPES.GET_MAIN_PRODUCT_SUCCESS,
  payload: data,
});

export const getMainProductFailed = (error) => ({
  type: TYPES.GET_MAIN_PRODUCT_FAILED,
  payload: error,
});

// Post product

export const postMainProduct = (data, callback) => ({
  type: TYPES.POST_MAIN_PRODUCT,
  payload: { data, callback },
});

export const postMainProductSuccess = (data) => ({
  type: TYPES.POST_MAIN_PRODUCT_SUCCESS,
  payload: data,
});

export const postMainProductFailed = (error) => ({
  type: TYPES.POST_MAIN_PRODUCT_FAILED,
  payload: error,
});

// delete product

export const deleteMainProduct = (data) => ({
  type: TYPES.DELETE_MAIN_PRODUCT,
  payload: data,
});

export const deleteMainProductSuccess = (data) => ({
  type: TYPES.DELETE_MAIN_PRODUCT_SUCCESS,
  payload: data,
});

export const deleteMainProductFailed = (error) => ({
  type: TYPES.DELETE_MAIN_PRODUCT_FAILED,
  payload: error,
});

// edit product

export const editMainProduct = (data) => ({
  type: TYPES.EDIT_MAIN_PRODUCT,
  payload: data,
});

export const editMainProductSuccess = (data) => ({
  type: TYPES.EDIT_MAIN_PRODUCT_SUCCESS,
  payload: data,
});

export const editMainProductFailed = (error) => ({
  type: TYPES.EDIT_MAIN_PRODUCT_FAILED,
  payload: error,
});
