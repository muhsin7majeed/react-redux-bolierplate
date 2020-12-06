/* eslint-disable import/prefer-default-export */

import { LOGIN_SUCCESS, LOGIN_LOADING, LOGOUT_USER } from 'redux/types';

const loginLoading = () => ({ type: LOGIN_LOADING });
const loginSuccess = (res) => ({ type: LOGIN_SUCCESS, payload: res });
export const logoutUser = () => ({ type: LOGOUT_USER });

export const loginUser = () => (dispatch) => {
  dispatch(loginLoading());

  setTimeout(() => {
    dispatch(loginSuccess({ name: 'User' }));
  }, 1000);
};
