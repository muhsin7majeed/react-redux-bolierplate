import { combineReducers } from 'redux';

import auth from './auth/reducers';
import todos from './home/reducers';

const reducers = combineReducers({ todos, auth });

export default reducers;
