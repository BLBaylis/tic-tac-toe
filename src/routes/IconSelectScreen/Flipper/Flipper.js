import React from "react";
import styles from "./Flipper.module.scss";

const Flipper = ({ front, back, flipped, style }) => {
  const flippedStyles = flipped ? styles.flipped : null;
  return (
    <div className={styles.flipperContainer} style={style}>
      <div className={`${styles.flipper} ${flippedStyles}`}>
        <div className={styles.front}>{front}</div>
        <div className={styles.back}>{back}</div>
      </div>
    </div>
  );
};

export default Flipper;
