import React from "react";
import styles from "./Flipper.module.scss";

const Flipper = props => {
  const flipped = props.flipped ? styles.flipped : null;
  return (
    <div className={styles.flipperContainer}>
      <div className={`${styles.flipper} ${flipped}`}>
        <div className={styles.front}>{props.front}</div>
        <div className={styles.back}>{props.back}</div>
      </div>
    </div>
  );
};

export default Flipper;
