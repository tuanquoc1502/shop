import { combineReducers } from 'redux';
import authReducer from './mainProduct/reducers';

const reducers = combineReducers({
  auth: authReducer,
});

export default reducers;
