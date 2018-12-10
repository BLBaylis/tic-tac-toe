import React from "react";
import styles from "./IconEditor.module.scss";
import Palette from "../palette/Palette";
import WheelSvg from '../iconGenerator/svgComponents/WheelSvg';

const IconEditor = props => {
  return (
    <div className={styles.iconEditor}>
      <div className={styles.canvas}>
        <div className={styles.canvasInner}>
            {<WheelSvg/>}
        </div>
      </div>
      <Palette />
    </div>
  );
};
export default IconEditor;
