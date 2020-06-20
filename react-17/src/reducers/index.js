import { combineReducers } from 'redux';

import { appReducer } from './app';
import { authReducer } from './auth';
import { contentReducer } from './content';
import { userReducer } from './user';

export const Reducers = combineReducers({
  appReducer,
  authReducer,
  contentReducer,
  userReducer,
});
