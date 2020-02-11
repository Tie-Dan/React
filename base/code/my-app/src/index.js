// index.js
import React from "react";
import ReactDOM from "react-dom";
import App from "./15.redux/App.jsx";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./15.redux/reducers";
import thunk from "redux-thunk";
// 中间件
const logger = store => next => action => {
  let res = next(action);
  return res;
};

const store = createStore(rootReducer, {}, applyMiddleware(logger, thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
