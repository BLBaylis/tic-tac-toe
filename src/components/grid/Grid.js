import React from "react";
import styles from "./Grid.module.scss";

const Grid = ({argsFromState, generateSquares}) => {
  const outcome = argsFromState.outcome;
  let gameEndMessage = "";
  if (outcome === "draw") {
    gameEndMessage = "DRAW!";
  } else if (outcome !== undefined) {
    gameEndMessage = `${outcome.toUpperCase()} WINS!`;
  }
  const gridClassName = styles[`grid-${argsFromState.gridSize}`];
  return (
    <div className={gridClassName}>
      {outcome && <div className={styles.outcome}>{gameEndMessage}</div>}
      {generateSquares(argsFromState)}
    </div>
  );
};

export default Grid;
