import React from "react";
import styles from "./Grid.module.scss";

const Grid = ({ outcome, gridSize, generateSquares }) => {
  const gridClassName = styles[`grid-${gridSize}`];
  return (
    <div className={gridClassName}>
      {outcome && (
        <div className={styles.outcome}>
          {outcome === "draw" ? "DRAW" : (
              outcome !== undefined ? `${outcome.toUpperCase()} WINS!` : ""
            )
          }
        </div>
        )
      }
      {generateSquares()}
    </div>
  );
};

export default Grid;
