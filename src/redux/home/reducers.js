import { TODOS_ERR, TODOS_LOADING, TODOS_SUCCESS } from 'redux/types';

const initialState = {
  loading: false,
  data: null,
  err: null,
};

const todos = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case TODOS_LOADING:
      return {
        ...state,
        loading: true,
      };

    case TODOS_SUCCESS:
      return {
        ...state,
        data: payload,
        loading: false,
      };

    case TODOS_ERR:
      return {
        ...state,
        err: payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default todos;
