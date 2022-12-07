import * as TYPES from './constants';

export const login = (data, callback) => ({
  type: TYPES.LOGIN,
  payload: { data, callback },
});
