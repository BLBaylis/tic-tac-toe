import React from "react";
import styles from "./Grid.module.scss";

const Grid = ({ outcome, gridSize, generateSquares }) => {
  let gameEndMessage = "";
  if (outcome === "draw") {
    gameEndMessage = "DRAW!";
  } else if (outcome !== undefined) {
    gameEndMessage = `${outcome.toUpperCase()} WINS!`;
  }
  const gridClassName = styles[`grid-${gridSize}`];
  return (
    <div className={gridClassName}>
      {outcome && <div className={styles.outcome}>{gameEndMessage}</div>}
      {generateSquares()}
    </div>
  );
};

export default Grid;
