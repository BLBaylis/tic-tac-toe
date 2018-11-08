import React from "react";
import GameSquare from "../gameSquare/GameSquare";

class Grid extends React.Component {
  renderSquare() {
    return <GameSquare />;
  }

  render() {
    return (
      <div className="grid">
        <div className="row">
          {this.renderSquare()}
          {this.renderSquare()}
          {this.renderSquare()}
        </div>
        <div className="row">
          {this.renderSquare()}
          {this.renderSquare()}
          {this.renderSquare()}
        </div>
        <div className="row">
          {this.renderSquare()}
          {this.renderSquare()}
          {this.renderSquare()}
        </div>
      </div>
    );
  }
}

export default Grid;
