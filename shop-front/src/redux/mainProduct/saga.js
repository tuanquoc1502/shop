import { takeEvery, all, put, call } from 'redux-saga/effects';
import * as TYPES from './constants';
import * as ACTIONS from './action';
import * as API from './api';
import { toast } from 'react-toastify';

function* getMainProductSaga() {
  try {
    const data = yield call(API.getMainProductApi);
    yield put(ACTIONS.getMainProductSuccess(data.data));
  } catch (error) {
    yield put(ACTIONS.getMainProductFailed(error));
    console.log(error);
  }
}

function* postMainProductSaga(props) {
  try {
    const data = yield call(API.postMainProductApi, props.payload.data);
    yield put(ACTIONS.postMainProductSuccess(data.data));

    if (data.status === 200) {
      props.payload.callback();
    }
    toast.success('Thêm sản phẩm thành công', { autoClose: 3000 });
  } catch (error) {
    yield put(ACTIONS.postMainProductFailed(error));
    console.log(error);
    toast.error('Thêm sản phẩm thất bại');
  }
}

function* deleteMainProductSaga(props) {
  try {
    const data = yield call(API.deleteMainProductApi, props.payload);

    if (data.status === 200) {
      yield put(ACTIONS.deleteMainProductSuccess(props.payload));
    }

    toast.success('Xóa sản phẩm thành công', { autoClose: 3000 });
  } catch (error) {
    yield put(ACTIONS.deleteMainProductFailed(error));
    console.log(error);
    toast.error('Xóa sản phẩm thất bại');
  }
}

function* editMainProductSaga(props) {
  try {
    const data = yield call(API.editMainProductApi, props.payload.data);
    yield put(ACTIONS.editMainProductSuccess(data.data));

    if (data.status === 200) {
      props.payload.callback();
    }
    toast.success('Sửa sản phẩm thành công', { autoClose: 3000 });
  } catch (error) {
    yield put(ACTIONS.editMainProductFailed(error));
    console.log(error);
    toast.error('Sửa sản phẩm thất bại');
  }
}

export default function* rootSaga() {
  yield all([takeEvery(TYPES.GET_MAIN_PRODUCT, getMainProductSaga)]);
  yield all([takeEvery(TYPES.POST_MAIN_PRODUCT, postMainProductSaga)]);
  yield all([takeEvery(TYPES.DELETE_MAIN_PRODUCT, deleteMainProductSaga)]);
  yield all([takeEvery(TYPES.EDIT_MAIN_PRODUCT, editMainProductSaga)]);
}
