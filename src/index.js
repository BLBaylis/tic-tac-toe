import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";

import {
  gameStateReducer,
  iconSelectFlippedToggleReducer,
  iconInfoReducer
} from "./reducers";
import "./index.scss";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import TictactoeApp from "./TictactoeApp/TictactoeApp";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#48ae7e",
      main: "#7be0ad",
      dark: "#aeffdf",
      contrastText: "#000"
    },
    secondary: {
      light: "#c27c26",
      main: "#f9ab55",
      dark: "#ffdd84",
      contrastText: "#000"
    }
  },
  typography: {
    fontFamily: ["BioRhyme", "Roboto", "Helvetica", "Arial", "sans-serif"].join(
      ","
    ),
    fontSize: 13.99
  },
  overrides: {
    MuiFormLabel: {
      root: {
        "&$focused": {
          color: "#c27c26"
        }
      }
    }
  }
});

const reducers = combineReducers({
  gameStateReducer,
  iconSelectFlippedToggleReducer,
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
