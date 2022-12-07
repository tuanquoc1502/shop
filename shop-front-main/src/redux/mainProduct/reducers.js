import * as TYPES from './constants';

const initState = {
  error: null,
  isLogin: false,
};

export default function authReducer(state = initState, action) {
  switch (action.type) {
    case TYPES.LOGIN: {
      return {
        ...state,
        isloging: true,
      };
    }
    default:
      return state;
  }
}
