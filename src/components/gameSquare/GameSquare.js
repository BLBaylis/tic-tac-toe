import React from "react";
import styles from "./GameSquare.module.scss";

const GameSquare = props => (
  <div className={styles.gameSquare} onClick={props.onClick} />
);

export default GameSquare;
