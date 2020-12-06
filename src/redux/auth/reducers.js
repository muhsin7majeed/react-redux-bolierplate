import { LOGIN_LOADING, LOGIN_SUCCESS, LOGOUT_USER } from 'redux/types';

const initialState = {
  loading: false,
  isLoggedIn: false,
  data: null,
};

const auth = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOGIN_LOADING:
      return {
        ...state,
        loading: true,
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        data: payload,
        isLoggedIn: true,
        loading: false,
      };

    case LOGOUT_USER:
      return initialState;

    default:
      return state;
  }
};

export default auth;
