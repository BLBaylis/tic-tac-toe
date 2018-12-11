import React from "react";
import styles from "./Grid.module.scss";

const Grid = props => {
  const outcome = props.argsFromState.outcome;
  let gameEndMessage = "";
  if (outcome === "draw") {
    gameEndMessage = "DRAW!";
  } else if (outcome !== undefined) {
    gameEndMessage = `${outcome.toUpperCase()} WINS!`;
  }
  const gridClassName = styles[`grid-${props.argsFromState.gridSize}`];
  return (
    <div className={gridClassName}>
      {outcome && <div className={styles.outcome}>{gameEndMessage}</div>}
      {props.generateSquares(props.argsFromState)}
    </div>
  );
};

export default Grid;
