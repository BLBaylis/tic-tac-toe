import React from "react";
import styles from "./Grid.module.scss";

const Grid = props => {
  const gridClassName = styles[`grid-${props.argsFromState.gridSize}`];
  return (
    <div className={gridClassName}>
      {props.generateSquares(props.argsFromState)}
    </div>
  );
};

export default Grid;
