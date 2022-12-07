import { Bounce, toast } from 'react-toastify';
import { takeEvery, all, put, call } from 'redux-saga/effects';
import * as TYPES from './constants';
import * as ACTIONS from './action';
import * as API from './api';

function* login(action) {}

export default function* rootSaga() {
  yield all([takeEvery(TYPES.LOGIN, login)]);
}
