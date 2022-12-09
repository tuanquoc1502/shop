import * as TYPES from './constants';

const initState = {
  dataProduct: [],
  loading: false,
  error: null,
};

export default function mainProductReducer(state = initState, action) {
  switch (action.type) {
    case TYPES.GET_MAIN_PRODUCT: {
      return {
        ...state,
        loading: true,
      };
    }

    case TYPES.GET_MAIN_PRODUCT_SUCCESS: {
      return {
        ...state,
        dataProduct: action.payload,
        loading: false,
      };
    }

    case TYPES.GET_MAIN_PRODUCT_FAILED: {
      return {
        ...state,
        error: action.payload,
      };
    }

    case TYPES.POST_MAIN_PRODUCT: {
      return {
        ...state,
        loading: true,
      };
    }

    case TYPES.POST_MAIN_PRODUCT_SUCCESS: {
      return {
        ...state,
        loading: false,
      };
    }

    case TYPES.POST_MAIN_PRODUCT_FAILED: {
      return {
        ...state,
        error: action.payload,
      };
    }

    case TYPES.DELETE_MAIN_PRODUCT: {
      return {
        ...state,
      };
    }

    case TYPES.DELETE_MAIN_PRODUCT_SUCCESS: {
      return {
        ...state,
        dataProduct: state.dataProduct.filter(
          (item) => item._id !== action.payload
        ),
      };
    }

    case TYPES.DELETE_MAIN_PRODUCT_FAILED: {
      return {
        ...state,
        error: action.payload,
      };
    }

    default:
      return state;
  }
}
