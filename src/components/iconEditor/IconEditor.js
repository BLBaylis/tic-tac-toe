import React from "react";
import styles from "./IconEditor.module.scss";
import Icon from "../icon/Icon";
import Paintbrush from "../paintbrush";
import { hex } from "color-convert";

const IconEditor = ({ changeIconSetting, iconInfo }) => {
  const { icon, colour } = iconInfo;
  const colourBrightness = hex.hsl(`${colour.slice(1)}`)[2];
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
          <Paintbrush
            className={styles.paintImg}
            colour={colourBrightness < 95 ? "#fff" : "#f9ab55"}
          />
        </i>
      </div>
    </div>
  );
};
export default IconEditor;
