import React from "react";
import styles from "./Palette.module.scss";

const Palette = props => {
  return (
    <div className={styles.palette}>
      <div
        onClick={() => props.changeSetting("black")}
        className={`${styles.colour} ${styles.black}`}
      />
      <div
        onClick={() => props.changeSetting("grey")}
        className={`${styles.colour} ${styles.grey}`}
      />
      <div
        onClick={() => props.changeSetting("darkRed")}
        className={`${styles.colour} ${styles.darkRed}`}
      />
      <div
        onClick={() => props.changeSetting("lightRed")}
        className={`${styles.colour} ${styles.lightRed}`}
      />
      <div
        onClick={() => props.changeSetting("orange")}
        className={`${styles.colour} ${styles.orange}`}
      />
      <div
        onClick={() => props.changeSetting("yellow")}
        className={`${styles.colour} ${styles.yellow}`}
      />
      <div
        onClick={() => props.changeSetting("darkGreen")}
        className={`${styles.colour} ${styles.darkGreen}`}
      />
      <div
        onClick={() => props.changeSetting("lightBlue1")}
        className={`${styles.colour} ${styles.lightBlue1}`}
      />
      <div
        onClick={() => props.changeSetting("darkBlue1")}
        className={`${styles.colour} ${styles.darkBlue1}`}
      />
      <div
        onClick={() => props.changeSetting("purple")}
        className={`${styles.colour} ${styles.purple}`}
      />
      <div
        onClick={() => props.changeSetting("white")}
        className={`${styles.colour} ${styles.white}`}
      />
      <div
        onClick={() => props.changeSetting("silver")}
        className={`${styles.colour} ${styles.silver}`}
      />
      <div
        onClick={() => props.changeSetting("brown")}
        className={`${styles.colour} ${styles.brown}`}
      />
      <div
        onClick={() => props.changeSetting("pink")}
        className={`${styles.colour} ${styles.pink}`}
      />
      <div
        onClick={() => props.changeSetting("gold")}
        className={`${styles.colour} ${styles.gold}`}
      />
      <div
        onClick={() => props.changeSetting("almond")}
        className={`${styles.colour} ${styles.almond}`}
      />
      <div
        onClick={() => props.changeSetting("lightGreen")}
        className={`${styles.colour} ${styles.lightGreen}`}
      />
      <div
        onClick={() => props.changeSetting("lightBlue2")}
        className={`${styles.colour} ${styles.lightBlue2}`}
      />
      <div
        onClick={() => props.changeSetting("darkBlue2")}
        className={`${styles.colour} ${styles.darkBlue2}`}
      />
      <div
        onClick={() => props.changeSetting("lightPurple")}
        className={`${styles.colour} ${styles.lightPurple}`}
      />
    </div>
  );
};

export default Palette;
