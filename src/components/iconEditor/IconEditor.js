import React from "react";
import styles from "./IconEditor.module.scss";
import Icon from "../icon/Icon";
import Paintbrush from "../paintbrush";
import { hex } from "color-convert";

const IconEditor = ({ changeIconSetting, iconInfo }) => {
  const { icon, colour } = iconInfo;
  let paintBrushColour;
  const colourBrightness = hex.hsl(`${colour.slice(1)}`)[2];
  if (colourBrightness < 95) {
    paintBrushColour = "#fff";
  } else {
    paintBrushColour = "#f9ab55";
  }
  return (
    <div className={styles.iconEditor}>
      <div className={styles.canvas}>
        <div className={styles.canvasInner}>
          <Icon icon={icon} colour={colour} />
        </div>
      </div>
      <div className={styles.palette}>
        <input
          type="color"
          onChange={e => changeIconSetting(e.target.value)}
          value={colour}
        />
        <i className={styles.paintIcon}>
          <Paintbrush className={styles.paintImg} colour={paintBrushColour} />
        </i>
      </div>
    </div>
  );
};
export default IconEditor;
