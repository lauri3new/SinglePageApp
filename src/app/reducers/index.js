// root reducer

import { combineReducers } from 'redux';
import users from './users.js';
import posts from './posts.js';
import comments from './comments.js';
import isLoading from './loading.js';
import error from './error.js';


export default combineReducers({
  users,
  posts,
  comments,
  isLoading,
  error
})
