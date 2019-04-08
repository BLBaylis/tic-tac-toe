import React from "react";
import styles from "./Grid.module.scss";

const Grid = ({ outcome, gridSize, generateSquares, gameMode }) => {
  const isDraw = outcome === "draw";
  const player1 = gameMode === "pvp" ? "PLAYER 1" : "PLAYER";
  const player2 = gameMode === "pvp" ? "PLAYER 2" : "COMP";
  const gridClassName = styles[`grid-${gridSize}`];
  return (
    <div className={gridClassName}>
      {outcome && (
        <div className={styles.outcome}>
          {outcome && isDraw && "DRAW!"}
          {outcome === "user" && `${player1} WINS!`}
          {outcome === "comp" && `${player2} WINS!`}
        </div>
      )}
      {generateSquares()}
    </div>
  );
};

export default Grid;
