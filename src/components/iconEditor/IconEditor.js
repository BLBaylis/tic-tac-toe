import React from "react";
import styles from "./IconEditor.module.scss";
import Palette from "../palette/Palette";
import IconGenerator from "../iconGenerator/IconGenerator";

const IconEditor = props => {
  return (
    <div className={styles.iconEditor}>
      <div className={styles.canvas}>
        <div className={styles.canvasInner}>
          {<IconGenerator iconInfo={props.iconInfo} />}
        </div>
      </div>
      <Palette changeSetting={props.changeSetting} />
    </div>
  );
};
export default IconEditor;
