import React from "react";
import styles from "./Grid.module.scss";

const Grid = props => {
  const gridClassName = styles[`grid-${props.gridSize}`];
  return (
    <div className={gridClassName}>
      {props.generateSquares(props.gridSize ** 2)}
    </div>
  );
};

export default Grid;
