import React from "react";
import styles from "./Button.module.scss";

const Button = props => {
  const rightMargin = props.noRightMargin
    ? styles.noRightMargin
    : "";
  const leftMargin = props.noLeftMargin
    ? styles.noLeftMargin
    : "";
  const hidden = props.hidden ? styles.hidden : "";
  const className = `${styles.button} ${rightMargin} ${leftMargin} ${hidden}`
  return (
    <button className={className} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
