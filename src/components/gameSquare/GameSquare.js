import React from "react";
import styles from "./GameSquare.module.scss";

const GameSquare = props => {
  const className = props.value ? `${styles.gameSquare} ${styles[props.value]}` : styles.gameSquare;
  return <button className={className} onClick={props.onClick}></button>
};

export default GameSquare;
