import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import Reducer from "./reducers/index.js";
import { loadState, saveState } from "./localStorage.js";

// configureStore creates store from root reducer, persistedState allows state
// to be stored in browser local storage, applying middleware logger (for dev)
// and thunk (allows asynchronous actions i.e AJAX)

const configureStore = () => {
  const persistedState = loadState();
  const store = createStore(
    Reducer,
    persistedState,
    applyMiddleware(logger(),thunk));
  store.subscribe( () => {
    saveState({
      users: store.getState().users,
      posts: store.getState().posts,
      comments: store.getState().comments
  });
});

  return store;
};

export default configureStore;
