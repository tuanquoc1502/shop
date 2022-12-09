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
