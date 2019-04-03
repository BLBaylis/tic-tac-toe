import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";

import {
  gameStateReducer,
  interfaceReducer,
  iconInfoReducer
} from "./reducers";
import "./index.scss";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import TictactoeApp from "./TictactoeApp/TictactoeApp";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#aeffdf",
      main: "#7be0ad",
      dark: "#48ae7e",
      contrastText: "#000"
    },
    secondary: {
      light: "#ffdd84",
      main: "#f9ab55",
      dark: "#c27c26",
      contrastText: "#000"
    }
  },
  typography: {
    fontFamily: ["BioRhyme", "Roboto", "Helvetica", "Arial", "sans-serif"].join(
      ","
    ),
    fontSize: 13.99
  }
});

const reducers = combineReducers({
  gameStateReducer,
  interfaceReducer,
  iconInfoReducer
});

const logger = createLogger();
const store = createStore(reducers, applyMiddleware(thunk, logger));

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <Provider store={store}>
      <TictactoeApp />
    </Provider>
  </MuiThemeProvider>,
  document.getElementById("root")
);
