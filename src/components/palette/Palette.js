import React from "react";
import styles from "./Palette.module.scss";

const Palette = props => {
  return (
    <div className={styles.palette}>
      <div className={`${styles.colour} ${styles.black}`} />
      <div className={`${styles.colour} ${styles.grey}`} />
      <div className={`${styles.colour} ${styles.darkRed}`} />
      <div className={`${styles.colour} ${styles.lightRed}`} />
      <div className={`${styles.colour} ${styles.orange}`} />
      <div className={`${styles.colour} ${styles.yellow}`} />
      <div className={`${styles.colour} ${styles.darkGreen}`} />
      <div className={`${styles.colour} ${styles.lightBlue1}`} />
      <div className={`${styles.colour} ${styles.darkBlue1}`} />
      <div className={`${styles.colour} ${styles.purple}`} />
      <div className={`${styles.colour} ${styles.white}`} />
      <div className={`${styles.colour} ${styles.silver}`} />
      <div className={`${styles.colour} ${styles.brown}`} />
      <div className={`${styles.colour} ${styles.pink}`} />
      <div className={`${styles.colour} ${styles.gold}`} />
      <div className={`${styles.colour} ${styles.almond}`} />
      <div className={`${styles.colour} ${styles.lightGreen}`} />
      <div className={`${styles.colour} ${styles.lightBlue2}`} />
      <div className={`${styles.colour} ${styles.darkBlue2}`} />
      <div className={`${styles.colour} ${styles.lightPurple}`} />
    </div>
  );
};

export default Palette;
