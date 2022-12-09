import { combineReducers } from 'redux';
import mainProductReducer from './mainProduct/reducers';

const reducers = combineReducers({
  mainProduct: mainProductReducer,
});

export default reducers;
