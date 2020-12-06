/* eslint-disable import/prefer-default-export */
import Axios from 'axios';
import endpoints from 'utils/endpoints';
import { TODOS_ERR, TODOS_SUCCESS, TODOS_LOADING } from 'redux/types';

const { todos } = endpoints;

const todosLoading = () => ({ type: TODOS_LOADING });
const todosSuccess = (res) => ({ type: TODOS_SUCCESS, payload: res });
const todosErr = (err) => ({ type: TODOS_ERR, payload: err });

export const getTodos = () => (dispatch) => {
  dispatch(todosLoading());

  Axios.get(`${todos}?_limit=10`)
    .then(({ data }) => dispatch(todosSuccess(data)))
    .catch((err) => dispatch(todosErr(err)));
};
