import React, { Component } from "react";
import Grid from "./components/grid/Grid";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Brad's Tic Tac Toe</h1>
          <Grid />
        </header>
      </div>
    );
  }
}

export default App;
