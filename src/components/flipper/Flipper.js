import React from "react";
import styles from "./Flipper.module.scss";

const Flipper = props => {
  const flipped = props.gameFlipped ? styles.flipped : null;
  const FrontComponent = React.cloneElement(props.front, { flip: props.flip });
  const BackComponent = React.cloneElement(props.back, { flip: props.flip });
  return (
    <div className={styles.flipperContainer}>
      <div className={`${styles.flipper} ${flipped}`}>
        <div className={styles.front}>{FrontComponent}</div>
        <div className={styles.back}>{BackComponent}</div>
      </div>
    </div>
  );
};

export default Flipper;
