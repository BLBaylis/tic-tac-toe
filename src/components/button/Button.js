import React from "react";
import styles from "./Button.module.scss";

const Button = props => {
    const sideMargins = props.noRightMargin ? styles.noRightMargin : styles.noLeftMargin;
    const className = props.noLeftMargin || props.noRightMargin ? `${styles.button} ${sideMargins}`: styles.button;
    return <button className={className} onClick={props.onClick}>{props.children}</button>;
};

export default Button;
