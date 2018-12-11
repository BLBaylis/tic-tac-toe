import React from "react";
import styles from "./GameSquare.module.scss";
import IconGenerator from '../iconGenerator/IconGenerator';

const GameSquare = props => {
  const className = props.value
    ? `${styles.gameSquare} ${styles[props.value]}`
    : styles.gameSquare;
  return (
    <button className={className} onClick={props.onClick}>
        {props.value === "user" && <IconGenerator iconInfo = {props.iconInfo.user}/>}
        {props.value === "comp" && <IconGenerator iconInfo = {props.iconInfo.comp}/>}
    </button>);
};

export default GameSquare;
