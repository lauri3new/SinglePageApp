import React from "react";
import { render } from "react-dom";
import Root from "./components/root.js";
import configureStore from "./configurestore.js";

const store = configureStore();

render(
    <Root store={store}/>,
  window.document.getElementById('root'));
