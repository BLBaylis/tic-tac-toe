import React from "react";
import styles from "./IconSelect.module.scss";
import IconEditor from "../iconEditor/IconEditor";

const IconSelect = props => {
  return (
    <div className={styles.iconSelect}>
      <h2
        className={styles.heading}
      >{`SELECT ${props.player.toUpperCase()} ICON`}</h2>
      <IconEditor />
      <div className={styles.iconShowcase}>
        <button className={styles.icon}>
          <div className={styles.iconInner} />
        </button>
        <button className={styles.icon}>
          <div className={styles.iconInner} />
        </button>
        <button className={styles.icon}>
          <div className={styles.iconInner} />
        </button>
        <button className={styles.icon}>
          <div className={styles.iconInner} />
        </button>
        <button className={styles.icon}>
          <div className={styles.iconInner} />
        </button>
        <button className={styles.icon}>
          <div className={styles.iconInner} />
        </button>
        <button className={styles.icon}>
          <div className={styles.iconInner} />
        </button>
        <button className={styles.icon}>
          <div className={styles.iconInner} />
        </button>
      </div>
      {props.player === "comp" && (
        <React.Fragment>
          <button onClick={props.flip} className={styles.button}>
            BACK
          </button>
          <button
            className={styles.button}
            onClick={props.toggleIconSelect}
          >{`CONFIRM ${props.player.toUpperCase()} ICON`}
          </button>
      </React.Fragment>
      )}
      {props.player === "user" && (
          <button
            className={styles.button}
            onClick={props.flip}
          >{`CONFIRM ${props.player.toUpperCase()} ICON`}
          </button>
      )}
    </div>
  );
};

export default IconSelect;
