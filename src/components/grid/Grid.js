import React from "react";
import styles from './Grid.module.scss';
import GameSquare from "../gameSquare/GameSquare";

class Grid extends React.Component {
  renderSquare() {
    return <GameSquare />;
  }

  render() {
    return (
      <div className={styles.grid}>
          {this.renderSquare()}
          {this.renderSquare()}
          {this.renderSquare()}
          {this.renderSquare()}
          {this.renderSquare()}
          {this.renderSquare()}
          {this.renderSquare()}
          {this.renderSquare()}
          {this.renderSquare()}
      </div>
    );
  }
}

export default Grid;
