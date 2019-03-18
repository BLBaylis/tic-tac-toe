import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";

import { updateGameGridReducer, updateInterfaceReducer } from "./reducers";
import "./index.scss";
import TictactoeApp from "./containers/TictactoeApp/TictactoeApp";

const reducers = combineReducers({
  updateGameGridReducer,
  updateInterfaceReducer
});

const logger = createLogger();
const store = createStore(reducers, applyMiddleware(thunk, logger));

ReactDOM.render(
  <Provider store={store}>
    <TictactoeApp />
  </Provider>,
  document.getElementById("root")
);
