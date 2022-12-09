import { all } from 'redux-saga/effects';
import mainProductSaga from './mainProduct/saga';

export default function* rootSaga() {
  yield all([mainProductSaga()]);
}
