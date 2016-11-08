// root reducer

import { combineReducers } from 'redux';
import usersReducer from './users.js';
import postsReducer from './posts.js';
import commentsReducer from './comments.js';
import isLoadingReducer from './loading.js';
import errorReducer from './error.js';


export default combineReducers({
  users: usersReducer,
  posts: postsReducer,
  comments: commentsReducer,
  isLoading: isLoadingReducer,
  error: errorReducer
})
