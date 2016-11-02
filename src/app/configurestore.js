import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import Reducer from "./reducers/index.js";
import { loadState } from "./localStorage.js";
import { saveState } from "./localStorage.js";

const configureStore = () => {
const persistedState = loadState();

  const store = createStore(
    Reducer,
    persistedState,
    applyMiddleware(logger(),thunk));

console.log(store.getState());

//throttle from lodash allows localStorage to be updated with new state max once
// a second regardless of state changes within that time
  store.subscribe( () => {
    saveState({
      users: store.getState().users,
      posts: store.getState().posts,
      comments: store.getState().comments
  })
});

  return store;
};

export default configureStore;
