import React from "react";
import styles from "./IconEditor.module.scss";
import Palette from "../palette/Palette";

const IconEditor = props => {
  return (
    <div className={styles.iconEditor}>
      <div className={styles.canvas}>
        <div className={styles.canvasInner} />
      </div>
      <Palette />
    </div>
  );
};
export default IconEditor;
