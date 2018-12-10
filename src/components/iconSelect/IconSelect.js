import React from "react";
import styles from "./IconSelect.module.scss";
import IconEditor from "../iconEditor/IconEditor";

const IconSelect = props => {
  return (
    <div className={styles.iconSelect}>
      <h2 className={styles.heading}>SELECT YOUR ICON</h2>
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
      <button className={styles.button}>BACK</button>
      <button className={styles.button}>CONFIRM</button>
    </div>
  );
};

export default IconSelect;
